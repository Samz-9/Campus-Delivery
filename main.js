
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth , GoggleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyA0Z2YU4_Wh9Z6HcfQEi_Q2TxmaOvKfxhU",
    authDomain: "campus-delivery-76250.firebaseapp.com",
    projectId: "campus-delivery-76250",
    storageBucket: "campus-delivery-76250.firebasestorage.app",
    messagingSenderId: "982763361330",
    appId: "1:982763361330:web:0a6cd8b0c0a20d8214582b",
    measurementId: "G-YH0XBJTEZH"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.langaugeCode = 'en'
  const provider =  new GoggleAuthProvider();
  const googleLogin =  document
