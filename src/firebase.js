import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANmewUo4CLtAjlO_kaadB4u0VKSd9dDJI",
  authDomain: "disney-plus-e43d5.firebaseapp.com",
  projectId: "disney-plus-e43d5",
  storageBucket: "disney-plus-e43d5.appspot.com",
  messagingSenderId: "966726238821",
  appId: "1:966726238821:web:a045d3d2479b729cd8bc8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };

export default db;
