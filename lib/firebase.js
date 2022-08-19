import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
