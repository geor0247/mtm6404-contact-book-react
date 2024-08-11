import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_FNxQUtQs-RnB5oOviVY4MHCJ5lYMa1E",
  authDomain: "contact-book-a679a.firebaseapp.com",
  projectId: "contact-book-a679a",
  storageBucket: "contact-book-a679a.appspot.com",
  messagingSenderId: "26090661947",
  appId: "1:26090661947:web:b438655ab4f98fecb3541e"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;
