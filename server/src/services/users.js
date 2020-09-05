import userModel from '../models/users';

export default class UserServices {
  static auth(user) {
    return userModel.createAuthUser(user);
  }
}
