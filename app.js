const express = require('express');
const db = require('./db');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the DressStore application' });
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
});
