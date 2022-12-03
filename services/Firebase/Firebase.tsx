
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs , onSnapshot, doc} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCCZwAuzK1uDiqVxtzY890E7fmUMUD-mAg",
  authDomain: "apporter-2238c.firebaseapp.com",
  projectId: "apporter-2238c",
  storageBucket: "apporter-2238c.appspot.com",
  messagingSenderId: "853142764680",
  appId: "1:853142764680:web:4de636c3df82e0a514333d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(initializeApp(firebaseConfig));

export{app,db,getFirestore,collection,addDoc, getDocs, onSnapshot, doc};