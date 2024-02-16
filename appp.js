// Firebase konfiguráció
const firebaseConfig = {
    apiKey: "AIzaSyDxDS52PZBrEmlpi671fn5znFB8aAxM3fM",
    authDomain: "fir-bc5e9.firebaseapp.com",
    projectId: "fir-bc5e9",
    storageBucket: "fir-bc5e9.appspot.com",
    messagingSenderId: "21975891971",
    appId: "1:21975891971:web:f8fe5ac8c73a14d215ce36",
    measurementId: "G-DLLXLFHREG"
  };
  
  // Firebase inicializálása
  firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics();
  