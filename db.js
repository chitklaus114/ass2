const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://dressStore:FOrxSaB7LydKs9te@cluster0.u2bzqx1.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

module.exports = mongoose.connection;

