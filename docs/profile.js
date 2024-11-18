import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyABNfJ3ROpD_wSlj1NXR4Q0S3kQ7nlaOqA",
    authDomain: "virtual-lab-tpb.firebaseapp.com",
    projectId: "virtual-lab-tpb",
    storageBucket: "virtual-lab-tpb.firebasestorage.app",
    messagingSenderId: "335500094237",
    appId: "1:335500094237:web:7b7655eceadf584002cff4",
    measurementId: "G-GZMLPG5PXN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userRef = doc(db, "users", user.uid);
        try {
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                document.getElementById('user-name').textContent = userData.name || ' - ';
                document.getElementById('user-id').textContent = userData.id || ' - ';
                document.getElementById('user-email').textContent = userData.email || ' - ';
                document.getElementById('user-class').textContent = userData.class || ' - ';
                
                // Update Last Online
                const lastOnlineElement = document.getElementById('last-online');
                lastOnlineElement.textContent = `Last Online: ${userData.lastOnline || ' - '} hour ago`;

                document.getElementById('read-modules').textContent = userData.readModules || ' - ';
                document.getElementById('read-submodules').textContent = userData.readSubmodules || ' - ';
                document.getElementById('submit-assignments').textContent = userData.submitAssignments || ' - ';
                document.getElementById('submit-exams').textContent = userData.submitExams || ' - ';
            } else {
                console.log("No such document!");
                displayDefaultData();
            }
        } catch (error) {
            console.error("Error getting document: ", error);
            displayDefaultData();
        }
    } else {
        window.location.href = 'login.html';
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    });
});

function displayDefaultData() {
    document.getElementById('user-name').textContent = ' - ';
    document.getElementById('user-id').textContent = ' - ';
    document.getElementById('user-email').textContent = ' - ';
    document.getElementById('user-class').textContent = ' - ';
    document.getElementById('last-online').textContent = 'Last Online: - hour ago';
    document.getElementById('read-modules').textContent = ' - ';
    document.getElementById('read-submodules').textContent = ' - ';
    document.getElementById('submit-assignments').textContent = ' - ';
    document.getElementById('submit-exams').textContent = ' - ';
}
