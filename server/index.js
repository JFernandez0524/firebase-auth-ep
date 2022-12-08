import express from 'express';
import cors from 'cors';
import { auth } from '../src/config/firebase-admin.js';

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello from Express');
});

app.get('/test', (req, res) => {
  res.send('test Route');
});
// verify token at the root route
app.get('/auth', async function (req, res) {
  //read token from header
  const idToken = req.headers.authorization;
  console.log('header: ', idToken);

  // idToken comes from the client app
  const decodedToken = await auth.verifyIdToken(idToken.split(' ')[1]);
  console.log(decodedToken);
  res.send('Auth Route');
});

app.listen(port, () => console.log('Server Running on Port ' + port));
