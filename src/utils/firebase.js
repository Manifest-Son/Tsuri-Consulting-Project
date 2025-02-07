// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
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
export const auth = getAuth(app);

// Gallery collection reference
export const galleryCollection = collection(database, 'gallery');

// Helper function to add gallery items
export const addGalleryItem = async (imageData) => {
  try {
    const docRef = await addDoc(galleryCollection, {
      imageUrl: imageData.imageUrl,
      title: imageData.title,
      description: imageData.description,
      date: imageData.date || serverTimestamp(),
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding gallery item: ", error);
    throw error;
  }
};
