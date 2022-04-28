// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClYcZDxaZcaX5yEbNeJH_vhsTEk1bZTzo",
    authDomain: "assignment-11-7e69c.firebaseapp.com",
    projectId: "assignment-11-7e69c",
    storageBucket: "assignment-11-7e69c.appspot.com",
    messagingSenderId: "252827060111",
    appId: "1:252827060111:web:30553120a4edebdfb8adfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth