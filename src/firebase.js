import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
    // apiKey: "AIzaSyC2x4HOe0JNLk-nGL0m_rJ4kzVGNlgSLhI",
    // authDomain: "fir-55fca.firebaseapp.com",
    // projectId: "fir-55fca",
    // storageBucket: "fir-55fca.appspot.com",
    // messagingSenderId: "312764874923",
    // appId: "1:312764874923:web:4d16dd6e8d7adf35bcb7ee",
    // measurementId: "G-DBHV1DH3KT"

  //   apiKey: "AIzaSyAUcNy7KFH3Ie93PyMShBfjcFaCJMRHpqI",
  // authDomain: "clone-9ca26.firebaseapp.com",
  // databaseURL: "https://clone-9ca26-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "clone-9ca26",
  // storageBucket: "clone-9ca26.appspot.com",
  // messagingSenderId: "875587869400",
  // appId: "1:875587869400:web:8823ebf424183ccf1495ad",
  // measurementId: "G-GJ8F7F6G0Z"

  apiKey: "AIzaSyARYWIcf_GAItlBUWOleeeBRo91sYfpgr8",
    authDomain: "testproject-39a50.firebaseapp.com",
    projectId: "testproject-39a50",
    storageBucket: "testproject-39a50.appspot.com",
    messagingSenderId: "977240044205",
    appId: "1:977240044205:web:d3a56653cc4193fe9a0c24",
    measurementId: "G-G5V86FGHMT"
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