import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHbgPLLGpbK3diMvplGUyxKVqonK059_8",
  authDomain: "iititube.firebaseapp.com",
  projectId: "iititube",
  storageBucket: "iititube.appspot.com",
  messagingSenderId: "680041520638",
  appId: "1:680041520638:web:269ff005709caa311534af",
  measurementId: "G-S1GRN4N1MP"
})
const firestore = app.firestore()
export const database = {
    users: firestore.collection("users"),
    videos: firestore.collection("Videos")
}
export const auth = app.auth()
export const db = firebase.firestore();
export const storage = firebase.storage();

export default app;