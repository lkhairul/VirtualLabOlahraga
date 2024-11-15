const firebaseConfig = {
    apiKey: "AIzaSyABNfJ3ROpD_wSlj1NXR4Q0S3kQ7nlaOqA",
    authDomain: "virtual-lab-tpb.firebaseapp.com",
    projectId: "virtual-lab-tpb",
    storageBucket: "virtual-lab-tpb.firebasestorage.app",
    messagingSenderId: "335500094237",
    appId: "1:335500094237:web:7b7655eceadf584002cff4",
    measurementId: "G-GZMLPG5PXN"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'mainPage.html';
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
