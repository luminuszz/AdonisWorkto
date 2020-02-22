'use strict';
// Import Modles from User
const User = use('App/Models/User');


class UserController {
  // Metodo store salva os cadastros da requisição no banco
  async store({request, response}) {
    const data = request.all();


    const user = await User.create(data);
    return user;
  }
}
// Exports Controller
module.exports = UserController;
