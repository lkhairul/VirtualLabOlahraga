// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyABNfJ3ROpD_wSlj1NXR4Q0S3kQ7nlaOqA",
    authDomain: "virtual-lab-tpb.firebaseapp.com",
    projectId: "virtual-lab-tpb",
    storageBucket: "virtual-lab-tpb.firebasestorage.app",
    messagingSenderId: "335500094237",
    appId: "1:335500094237:web:7b7655eceadf584002cff4",
    measurementId: "G-GZMLPG5PXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful, redirect to the main page
            window.location.href = 'mainPage.html';
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
