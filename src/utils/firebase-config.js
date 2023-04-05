// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} = process.env;
const firebaseConfig = {
  apiKey,
  authDomain: "ramkrishnajena-blog.firebaseapp.com",
  databaseURL: "https://ramkrishnajena-blog-default-rtdb.firebaseio.com",
  projectId: "ramkrishnajena-blog",
  storageBucket: "ramkrishnajena-blog.appspot.com",
  messagingSenderId: "718574170125",
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
