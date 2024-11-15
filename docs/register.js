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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('User created successfully!');
            window.location.href = 'index.html'; // Redirect to login page
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});
