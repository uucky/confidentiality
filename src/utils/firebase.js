import firebase from 'firebase';
import 'firebase/firestore';
import config from '../../config';

// firebase init goes here
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const answerCollection = db.collection('answer');
const fruitCollection = db.collection('fruit');

const auth = firebase.auth();

export {
  db,
  answerCollection,
  fruitCollection,
  auth,
};
