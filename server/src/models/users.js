import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  authenticatedEmail: {
    type: String,
    required: true,
    unique: true,
  },
  isReviewer: {
    type: Boolean,
    default: false,
  },
  isProcessor: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

class UserSchema {
  createAuthUser(user) {
    return this.create(user);
  }
}

userSchema.loadClass(UserSchema);
export default model('User', userSchema);
