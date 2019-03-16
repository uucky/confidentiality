import firebase from 'firebase';
import 'firebase/firestore';
import config from '../../config';

// firebase init goes here
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const guestsCollection = db.collection('guests');

export {
  db,
  guestsCollection,
};
