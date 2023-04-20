import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase-config";

const postCollection = collection(db, "posts");
const UsersCollection = collection(db, "users");

const allUsers = async () => {
  const allUserDetails = await getDocs(UsersCollection);
  return allUserDetails.docs;
};
const authUser = async ({ email }) => {
  const auth = await doc(UsersCollection, email);
  return getDoc(auth);
};

const addUser = async (user) => {
  const addPost = await addDoc(UsersCollection, user);
};
const deleteUser = async (user) => {
  const deleteUser = await doc(UsersCollection, user);
};

export { allUsers, authUser, addUser, deleteUser };
