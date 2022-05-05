// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyANx9kzxCZXS5EAzZws0_EpBCGyPqWrIig",
	authDomain: "kd-notes-app.firebaseapp.com",
	projectId: "kd-notes-app",
	storageBucket: "kd-notes-app.appspot.com",
	messagingSenderId: "917323219311",
	appId: "1:917323219311:web:ff14d27cafef35d707689a",
	measurementId: "G-675GQ1TXV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };
