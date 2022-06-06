import { auth } from '../server.js';
export const createUser = (req, res) => {
  const { email, password, passwordConfirm, phoneNumber, name, age } = req.body;
  console.log(req.body);
  if (password !== passwordConfirm) {
    return res.status(400).send('Passwords do not match');
  }
  if (password.trim().length < 6)
    return res.status(400).send('Password must be at least 6 characters long');
  auth
    .createUser({
      email,
      password,
      passwordConfirm,
      emailVerified: false,
      displayName: name,
      disabled: false,
      phoneNumber,
      age,
    })
    .then(userRecords => {
      console.log('userCreated');
      res.status(201).json(userRecords);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getToken = async (req, res) => {
  const user = await auth.getUser('aoGRP33YyXQtwlb33ZNfhYaTHFJ2');
};

export const login = (req, res) => {
  auth.getUser('aoGRP33YyXQtwlb33ZNfhYaTHFJ2').then(user => {
    res.send(user);
  });
};
