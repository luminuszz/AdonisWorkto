'use strict';
// Import Modles from User
const User = use('App/Models/User');


class UserController {
  // Metodo store salva os cadastros da requisição no banco
  async store({request}) {
    // request to clx for receive data to client
    const data = request.all();
    // const "data" receive data for request
    // use method "all" for take all data
    const user = await User.create(data);
    // const "user" receive .create for save data in database
    return user;
  }
}
// Exports Controller
module.exports = UserController;
