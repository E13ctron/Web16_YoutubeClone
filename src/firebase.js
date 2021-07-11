import firebase from "firebase/auth"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAUcNy7KFH3Ie93PyMShBfjcFaCJMRHpqI",
    authDomain: "clone-9ca26.firebaseapp.com",
    projectId: "clone-9ca26",
    storageBucket: "clone-9ca26.appspot.com",
    messagingSenderId: "875587869400",
    appId: "1:875587869400:web:8823ebf424183ccf1495ad",
    measurementId: "G-GJ8F7F6G0Z"
})
export const auth = app.auth()

export default app;