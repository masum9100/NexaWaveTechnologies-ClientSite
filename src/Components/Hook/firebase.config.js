// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRyI0_7Zph69M1E4DzO-jKAypi88vF6Rs",
  authDomain: "nexawave-1d00b.firebaseapp.com",
  projectId: "nexawave-1d00b",
  storageBucket: "nexawave-1d00b.appspot.com",
  messagingSenderId: "1048625594005",
  appId: "1:1048625594005:web:0f421d24e99a62dbd2a59c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app