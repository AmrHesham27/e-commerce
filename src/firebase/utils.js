import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config'
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signOut } from "firebase/auth";

// to start firebase Real time DataBase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const db = getFirestore(app);
const auth = getAuth();
// log out 
export const logOut = () => { signOut(auth).then(() => {
    // Sign-out successful.
    console.log('logged out')
    }).catch((error) => {
    // An error happened.
    console.log('error, did not logout')
    });
};

  
 