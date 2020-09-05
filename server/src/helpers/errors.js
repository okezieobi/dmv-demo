/* eslint-disable no-console */
export default class ErrorHandler {
  static logErrors(err, req, res) {
    console.error(err);
    res.send(err);
  }
}
