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
      text: 'Redirecting to Login...',
      showConfirmButton: false,
      timer: 3000
    });

    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.message
    });
  }
}

// 🔹 Login user (fixed)
export async function loginUser(form) {
  const email = form.username.value.trim();
  const password = form.password.value;

  try {
    // Await Firebase login once
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify({ email: userCredential.user.email })); // save session manually

    // ✅ Do NOT rely on onAuthStateChanged anywhere
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Redirecting to Home...',
      showConfirmButton: false,
      timer: 2000
    });

    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.message
    });
  }
}

