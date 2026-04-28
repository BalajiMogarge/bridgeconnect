// BridgeConnect — shared Firebase config
// Import this in every page using: import { auth, db } from './firebase.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBD5RY0C6sNtECrPAdris3Bk2a-zkywjwg",
  authDomain:        "bridgeconnect-df65b.firebaseapp.com",
  databaseURL:       "https://bridgeconnect-df65b-default-rtdb.firebaseio.com",
  projectId:         "bridgeconnect-df65b",
  storageBucket:     "bridgeconnect-df65b.firebasestorage.app",
  messagingSenderId: "141713664993",
  appId:             "1:141713664963:web:a13d8df1ec7daf0e6a6b76"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
