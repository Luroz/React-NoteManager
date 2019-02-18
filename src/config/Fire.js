import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAHostcqRRt_DN_QKmDSYv0NezEzSZNTBE",
  authDomain: "notemanag.firebaseapp.com",
  databaseURL: "https://notemanag.firebaseio.com",
  projectId: "notemanag",
  storageBucket: "notemanag.appspot.com",
  messagingSenderId: "1098429367194"
};
const fire = firebase.initializeApp(config);

export default fire; 