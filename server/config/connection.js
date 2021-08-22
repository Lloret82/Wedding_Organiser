const mongoose = require('mongoose');


mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/wedding',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
