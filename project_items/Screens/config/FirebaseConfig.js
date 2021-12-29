import firebase from 'firebase';
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyBlK04n17HL_NrZpX5gWmoYnlA6KGHJkhU",
  authDomain: "eignapp-c856f.firebaseapp.com",
  projectId: "eignapp-c856f",
  storageBucket: "eignapp-c856f.appspot.com",
  messagingSenderId: "12872026209",
  appId: "1:12872026209:web:3e5bba08d0911b86be0220",
  measurementId: "G-XZLEHGLJ7V"
};
// Initialize Firebase
// firebase.firestore()
const app=firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
db.settings({ experimentalForceLongPolling: true });
export default {firebase};