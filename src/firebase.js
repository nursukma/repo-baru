import firebase from "firebase/compat/app"
// import { inisiasiApp } from 'firebase/app'
import "firebase/compat/database"
import 'firebase/compat/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyA5k3ZTjqWAnu3aUppDhV_W7KuN3x0j8c8",
    authDomain: "simple-project-3e3c0.firebaseapp.com",
    databaseURL: "https://simple-project-3e3c0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "simple-project-3e3c0",
    storageBucket: "simple-project-3e3c0.appspot.com",
    messagingSenderId: "1044749817325",
    appId: "1:1044749817325:web:cbb55805180892a60a43e4",
    measurementId: "G-E7JQX9CRYP"
});

// const app = firebase.initializeApp(config);
// // const app = inisiasiApp(config);
// const auth = getAuth(app)

export const auth = app.auth();
export default app
export const databaseService = firebase.database();