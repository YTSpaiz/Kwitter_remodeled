
const firebaseConfig = {
    apiKey: "AIzaSyD8Ofnzjj-NOsykROp0fD1ErCS726s1Mk4",
    authDomain: "kwitter-9d728.firebaseapp.com",
    databaseURL: "https://kwitter-9d728-default-rtdb.firebaseio.com",
    projectId: "kwitter-9d728",
    storageBucket: "kwitter-9d728.appspot.com",
    messagingSenderId: "675602347666",
    appId: "1:675602347666:web:3698b317de7573073ad84b"
  };
  

  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    });});}
getData();