import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC2x4HOe0JNLk-nGL0m_rJ4kzVGNlgSLhI",
    authDomain: "fir-55fca.firebaseapp.com",
    projectId: "fir-55fca",
    storageBucket: "fir-55fca.appspot.com",
    messagingSenderId: "312764874923",
    appId: "1:312764874923:web:4d16dd6e8d7adf35bcb7ee",
    measurementId: "G-DBHV1DH3KT"
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