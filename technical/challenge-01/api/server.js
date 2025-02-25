import express from 'express';

import * as jokes from './routes/jokes.js';
import * as jokeService from './services/dad-joke-service.js';

const app = express();
const port = 3030;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return next();
});

app.get('/jokes', jokes.get(jokeService));

app.listen(port, () => console.log(`Listening on port ${port}`));
