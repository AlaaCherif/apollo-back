import app from './app.js';

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';
import { getAuth } from 'firebase-admin/auth';

const defaultApp = initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://apollo-4d7c6-default-rtdb.firebaseio.com/',
});
const database = getDatabase(defaultApp);
export const auth = getAuth(defaultApp);

export default database;

// Initialize Firebase

app.listen(3000, () => console.log('Server started on port 3000'));
