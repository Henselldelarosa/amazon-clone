// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDR2107kT9W8Qg3tQDMvaJPFcMoSSC7DCk",
  authDomain: "clone-4703d.firebaseapp.com",
  projectId: "clone-4703d",
  storageBucket: "clone-4703d.appspot.com",
  messagingSenderId: "373477589159",
  appId: "1:373477589159:web:25d1849e340f9379cd9b82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);


export {db}
