// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOFdsoAyOuiRZMLAcA641dQqRlfm5U9hs",
  authDomain: "geekster-f08e6.firebaseapp.com",
  projectId: "geekster-f08e6",
  storageBucket: "geekster-f08e6.appspot.com",
  messagingSenderId: "752832355862",
  appId: "1:752832355862:web:907a2bde1f8107c468df37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
