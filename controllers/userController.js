import database from '../server.js';
import { ref, get } from 'firebase/database';
export const getUsers = (req, res) => {
  console.log(req.body);
  const usersRef = ref(database);
  get(usersRef).then(snapshot => {
    res.status(200).send(snapshot.val());
  });
};
export const getUser = (req, res) => {};
