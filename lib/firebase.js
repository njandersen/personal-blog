import {
  collection,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  setDoc,
  getDoc,
  where,
} from "firebase/firestore";
import firebase from "firebase/app";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { Timestamp, toJSON } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB4SbXl-I1TMoa31ybnCzmTASXjZFnMAg",
  authDomain: "personal-blog-8decb.firebaseapp.com",
  projectId: "personal-blog-8decb",
  storageBucket: "personal-blog-8decb.appspot.com",
  messagingSenderId: "473768411808",
  appId: "1:473768411808:web:c464d23c531b8bdaa4bfc5",
  measurementId: "G-6F04591W4N",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

//Reads all the posts in the database
export const getPosts = async () => {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const querySnapShot = await getDocs(q);
  const posts = querySnapShot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    date: doc.data().date?.toDate().getTime(),
  }));
  return posts;
};

// Get one post from database based on the slug.
export const getPostBySlug = async (slug) => {
  const q = query(collection(db, "posts"), where("slug", "==", `${slug}`));
  const querySnapShot = await getDocs(q);
  const post = querySnapShot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    date: doc.data().date?.toDate().getTime(),
  }));
  return post;
};

// Adds posts to the database
export const createPost = async (post) => {
  await setDoc(doc(db, "posts", `${post.slug}`), {
    title: post.title,
    content: post.content,
    date: Timestamp.fromDate(new Date()),
    slug: post.slug,
  });
};

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
