import database from '../server.js';
import { ref, get } from 'firebase/database';
export const getUsers = (req, res) => {
  const usersRef = ref(database);
  get(usersRef).then(snapshot => {
    res.status(200).send(snapshot.val());
  });
};
