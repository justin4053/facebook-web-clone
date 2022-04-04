import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCqde3XWMmW1KFeT4AkCu1wOnc2rMNWhsc",
    authDomain: "fb-web-clone.firebaseapp.com",
    projectId: "fb-web-clone",
    storageBucket: "fb-web-clone.appspot.com",
    messagingSenderId: "58206284827",
    appId: "1:58206284827:web:2d2265dbcbdc9af2b75cbe"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }