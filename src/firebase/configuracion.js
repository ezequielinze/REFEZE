// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmBR2dYxTDc6uvdmYwQwP2Dv3hpf5zf6E",
  authDomain: "refeze-2e175.firebaseapp.com",
  projectId: "refeze-2e175",
  storageBucket: "refeze-2e175.appspot.com",
  messagingSenderId: "166337740713",
  appId: "1:166337740713:web:91fc6c28bd9a29eab40eb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)