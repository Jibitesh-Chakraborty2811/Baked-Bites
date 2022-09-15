import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAbwpf1snn0S3eRCopaypUGBM5RMHnx3l4",
  authDomain: "bakedbites-92a5e.firebaseapp.com",
  projectId: "bakedbites-92a5e",
  storageBucket: "bakedbites-92a5e.appspot.com",
  messagingSenderId: "1006060792181",
  appId: "1:1006060792181:web:aac2a40cadc71c9e2ccb3c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
