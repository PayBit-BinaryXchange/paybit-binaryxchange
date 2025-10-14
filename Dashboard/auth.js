// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { 
  getFirestore, doc, setDoc 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🔹 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbsVFPc7E7utmykvwrYq1HKhxlVvweLA",
  authDomain: "paybit-binaryxchange.firebaseapp.com",
  projectId: "paybit-binaryxchange",
  storageBucket: "paybit-binaryxchange.appspot.com",
  messagingSenderId: "531832844383",
  appId: "1:531832844383:web:f48d52644a3ee49ef16bea",
  measurementId: "G-TMJYTEY5GL"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔹 Register user
export async function registerUser(form) {
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const password2 = form.password2.value;
  const mobile = form.mobile.value.trim();
  const country = form.country.value;
  const currency = form.currency.value;
  const account = Array.from(form.querySelector('[name="account[]"]').selectedOptions).map(opt => opt.value);

  if (password !== password2) {
    Swal.fire({
      icon: 'error',
      title: 'Password Mismatch',
      text: 'Please make sure both passwords match.'
    });
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      firstName: fname,
      lastName: lname,
      username,
      email,
      mobile,
      country,
      currency,
      account,
      createdAt: new Date()
    });

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Redirecting to Home...',
      showConfirmButton: false,
      timer: 1000
    });

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.message
    });
  }
}

// 🔹 Login user
export async function loginUser(form) {
  const email = form.username.value.trim(); // assume it's email
  const password = form.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Redirecting to Home...',
      showConfirmButton: false,
      timer: 1000
    });

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.message
    });
  }
}












































/* auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { 
  getFirestore, doc, setDoc, getDoc 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🔹 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbsVFPc7E7utmykvwrYq1HKhxlVvweLA",
  authDomain: "paybit-binaryxchange.firebaseapp.com",
  projectId: "paybit-binaryxchange",
  storageBucket: "paybit-binaryxchange.appspot.com",
  messagingSenderId: "531832844383",
  appId: "1:531832844383:web:f48d52644a3ee49ef16bea",
  measurementId: "G-TMJYTEY5GL"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔹 Register user
export async function registerUser(form) {
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const password2 = form.password2.value;
  const mobile = form.mobile.value.trim();
  const country = form.country.value;
  const currency = form.currency.value;
  const account = Array.from(form.querySelector('[name="account[]"]').selectedOptions).map(opt => opt.value);

  if (password !== password2) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      firstName: fname,
      lastName: lname,
      username,
      email,
      mobile,
      country,
      currency,
      account,
      createdAt: new Date()
    });

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Redirecting to Login...',
      showConfirmButton: false,
      timer: 900,
      timerProgressBar: true
    });
    window.location.href = "login";
  } catch (error) {
    alert(error.message);
  }
}

// 🔹 Login user
export async function loginUser(form) {
  const emailOrUsername = form.username.value.trim();
  const password = form.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailOrUsername, password);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Redirecting to Dashboard...',
      showConfirmButton: false,
      timer: 900,
      timerProgressBar: true
    });
    window.location.href = "home";
  } catch (error) {
    alert(error.message);
  }
}

//🔹 Show user info on dashboard/settings
export function loadUserData() {
  const loading = document.getElementById("loading-screen");
  const content = document.getElementById("account-content");

  // Wait 1 second before checking
  setTimeout(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            document.querySelector('input[name="first"]').value = data.firstName || "";
            document.querySelector('input[name="last"]').value = data.lastName || "";
            document.querySelector('input[name="email"]').value = data.email || "";
            document.querySelector('input[id="example-number-input"]').value = data.username || "";
            document.querySelector('input[type="country"]').value = data.country || "";
          }
          loading.style.display = "none";
          content.style.display = "block";
        } catch (err) {
          console.error(err);
        }
      } else {
        window.location.href = "account";
      }
    });
  }, 10000);
}*/


