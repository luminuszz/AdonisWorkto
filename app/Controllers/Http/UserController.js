'use strict';
// Import Modles from User
const User = use('App/Models/User');


class UserController {
  // Metodo store salva os cadastros da requisição no banco
  async store({request, response}) {
    try {
      const data = request.all();

      const user = await User.create(data);
      return user;
    } catch (error) {
      return response.status().send({message: 'Erro no cadastro'});
    }
  }

  async getUsers() {
    return User.all();
  }
}
// Exports Controller
module.exports = UserController;
