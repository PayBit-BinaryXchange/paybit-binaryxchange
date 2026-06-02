const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['Deposit', 'Withdraw', 'Signal', 'Upgrade'], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: '£' },
  status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  plan: String, // for Signal/Upgrade
  proof: String, // file path for payment proof
  date: { type: Date, default: Date.now },
  approvedAt: { type: Date, default: null } // track when admin approved
}, {
  timestamps: false // don't auto-add createdAt/updatedAt to subdocs
  // _id: true by default - DO NOT set _id: false
});

const UsersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, sparse: true },
  password: String,
  mobile: String,
  referral: String,
  country: String,
  currency: { type: String, default: '£' },
  account: [String],
  profilePic: { type: String, default: '/img/profile/default.png' },
  state: { type: String, default: 'None' },
  address: { type: String, default: 'None' },

  // BALANCE FIELDS
  balance: { type: Number, default: 0 },
  totalDeposit: { type: Number, default: 0 },
  totalBonus: { type: Number, default: 0 },
  totalEarning: { type: Number, default: 0 },

  // SECURITY - admin role
  role: { type: String, enum: ['user', 'admin'], default: 'user' },

  transactions: [TransactionSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UsersSchema);