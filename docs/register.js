const firebaseConfig = {
    apiKey: "AIzaSyABNfJ3ROpD_wSlj1NXR4Q0S3kQ7nlaOqA",
    authDomain: "virtual-lab-tpb.firebaseapp.com",
    projectId: "virtual-lab-tpb",
    storageBucket: "virtual-lab-tpb.firebasestorage.app",
    messagingSenderId: "335500094237",
    appId: "1:335500094237:web:7b7655eceadf584002cff4",
    measurementId: "G-GZMLPG5PXN"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const userid = document.getElementById('register-userid').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            name: username,
            id: userid,
            email: user.email,
            class: "STI",
            lastOnline: 0,
            readModules: 0,
            readSubmodules: 0,
            submitAssignments: 0,
            submitExams: 0
        });

        alert('Pengguna berhasil dibuat dan data disimpan di Firestore!');
        window.location.href = 'index.html';
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
