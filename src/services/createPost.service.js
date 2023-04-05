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
const Users = collection(db, "users");

const allPosts = async () => {
  const Posts = await getDocs(postCollection);
  return Posts.docs;
};

const createPost = async (newPost) => {
  const addPost = await addDoc(postCollection, newPost);
};

const getPost = (id) => {
  const post = doc(db, "posts", id);
  return getDoc(post);
};
const updatePost = async (id, updatedPost) => {
  const post = await doc(db, "posts", id);
  return updateDoc(post, updatedPost);
};

const deletePost = async (id) => {
  const post = await doc(db, "posts", id);
  return deleteDoc(post);
};

export { allPosts, createPost, getPost, updatePost, deletePost };
