// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage, ref } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);

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

const uploadFile = (fileObj) => {
  const storage = getStorage();

  const oldFileName = fileObj.name;
  const extension = oldFileName.substring(oldFileName.lastIndexOf("."));
  const newFileName = randomName(20) + extension;

  const fileRef = ref(storage, newFileName);
  console.log(fileRef);
};

export { uploadFile };