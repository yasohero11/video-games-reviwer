
var firebaseConfig = {
      apiKey: "AIzaSyACg4shxSJvF2QCdNuWJ84vjMeKidrapTc",
    authDomain: "game-65654.firebaseapp.com",
    databaseURL: "https://game-65654.firebaseio.com",
    projectId: "game-65654",
    storageBucket: "game-65654.appspot.com",
    messagingSenderId: "276974278587",
    appId: "1:276974278587:web:6b5666e2d78f99e390d69e",
    measurementId: "G-623XPZVX8J"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
           document.getElementById('loginBtn').style.visibility = 'hidden';
        }
    })


     