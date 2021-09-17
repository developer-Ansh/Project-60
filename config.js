import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBCm2EZry369M45E_dWtkr6AZpABQcQbBU",
  authDomain: "pro-60-c7529.firebaseapp.com",
  databaseURL: "https://pro-60-c7529-default-rtdb.firebaseio.com",
  projectId: "pro-60-c7529",
  storageBucket: "pro-60-c7529.appspot.com",
  messagingSenderId: "171125908251",
  appId: "1:171125908251:web:0c1a35ff223b5ea103a9be"
};


let app = firebase.initializeApp(firebaseConfig);
export default app.database();