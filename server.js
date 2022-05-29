import app from './app.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, get } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyASFfCH0LsOGVD_-BLKyp4N2brKC1ISoAA',
  authDomain: 'apollo-4d7c6.firebaseapp.com',
  databaseURL: 'https://apollo-4d7c6-default-rtdb.firebaseio.com',
  projectId: 'apollo-4d7c6',
  storageBucket: 'apollo-4d7c6.appspot.com',
  messagingSenderId: '391241832904',
  appId: '1:391241832904:web:270f73c19d56c256c108fd',
  measurementId: 'G-KWZ5TC04NZ',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase();
export default database;

// Initialize Firebase

app.listen(3000, () => console.log('Server started on port 3000'));
