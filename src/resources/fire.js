// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqHep8arVct7xlRCZpOY5T8dU44FpygM",
  authDomain: "fluffnet-ai.firebaseapp.com",
  projectId: "fluffnet-ai",
  storageBucket: "fluffnet-ai.appspot.com",
  messagingSenderId: "443265600217",
  appId: "1:443265600217:web:a0522ad0c63fcd5c8accc8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// generates new name for the image
const randomName = (length) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const saveFeedback = (fileObj, prediction, correct) => {
  const storage = getStorage();

  let fileName = fileObj.name;
  const extension = fileName.substring(fileName.lastIndexOf("."));
  fileName = randomName(20) + extension;

  const storageRef = ref(storage, fileName);
  uploadBytes(storageRef, fileObj).then(() => {
    addDoc(collection(db, "feedback"), {
      fileName,
      prediction,
      correct,
      timestamp: new Date(),
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  });
};

export { saveFeedback };
