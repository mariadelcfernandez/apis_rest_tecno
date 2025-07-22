import { db } from "../config/db.js";

import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
const userCollection = collection(db, "users");

export const getAllUsers = async () => {
  try {
    const userstList = await getDocs(userCollection);
    const users = [];
    userstList.forEach((doc) => users.push({ id: doc.id, ...doc.data() }));

    return s;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};
