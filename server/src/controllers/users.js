import UserServices from '../services/users';

export default class UserControllers {
  static async signup({ body }, res, next) {
    try {
      const newUser = await UserServices.signup(body);
      res.status(201).send(newUser);
    } catch (error) {
      next(error);
    }
  }
}
