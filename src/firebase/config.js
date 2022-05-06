import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbXKd5Q0UoEezxAV_p7v_3GdIhxNuk0lQ",
  authDomain: "blog-react-2060e.firebaseapp.com",
  projectId: "blog-react-2060e",
  storageBucket: "blog-react-2060e.appspot.com",
  messagingSenderId: "430335970136",
  appId: "1:430335970136:web:90e0ac76b09e851c86332d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}