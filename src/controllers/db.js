import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { envs } from "../config/envs.js";

const  {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
} = envs.database;
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };  