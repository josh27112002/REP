// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1vKs3CSDUbvU3XaFHzX_hmdq05ga2TUE",
  authDomain: "erpj-3f6b7.firebaseapp.com",
  projectId: "erpj-3f6b7",
  storageBucket: "erpj-3f6b7.appspot.com",
  messagingSenderId: "277321931724",
  appId: "1:277321931724:web:52b2aa01f80ac816109b69"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
