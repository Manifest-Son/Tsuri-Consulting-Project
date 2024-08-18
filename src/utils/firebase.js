// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { config } from 'dotenv'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkP9NZE9e0bBCxMcSE4HoUxyYwwmDdvNQ",
  authDomain: "tsuri-consultants.firebaseapp.com",
  projectId: "tsuri-consultants",
  storageBucket: "tsuri-consultants.appspot.com",
  messagingSenderId: "710994771916",
  appId: "1:710994771916:web:57741278a0518ba3052769",
  measurementId: "G-9P5FCCZYKL",
};

// console.log({ firebaseConfig });

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
