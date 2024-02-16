// import firebase from "firebase/compat/app"
// import {initializeApp} from 'firebase/app';
// import firebase from 'firebase';

import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFVjvwrrznC3BisRJ7NVbJHJj1EClA0HI",
    authDomain: "netflix-clone-project-f47f9.firebaseapp.com",
    projectId: "netflix-clone-project-f47f9",
    storageBucket: "netflix-clone-project-f47f9.appspot.com",
    messagingSenderId: "907188941509",
    appId: "1:907188941509:web:faf5d394d2147240c4b6ac"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const empty_db = getFirestore()
const auth = getAuth(firebaseApp);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export {auth, empty_db}
export default db;