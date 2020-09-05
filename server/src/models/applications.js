import { Schema, model } from 'mongoose';

const applicationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: Buffer,
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  sex: {
    type: String,
  },
  stateOfOrigin: {
    type: String,
  },
  occupation: {
    type: String,
  },
  authToken: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

export default model('Application', applicationSchema);
