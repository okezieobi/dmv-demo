/* eslint-disable no-console */
import mongoose from 'mongoose';
import env from './env';

export default class Database {
  static connect() {
    const { DatabaseURL } = env;
    mongoose.connect(DatabaseURL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }).catch((error) => console.error(error));
  }

  static verifyConnection() {
    mongoose.connection.once('open', () => console.log('Connected to db'));
    mongoose.connection.on('error', (err) => console.error(err));
  }
}
