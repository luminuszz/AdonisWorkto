'use strict';
class StoreUser {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'required|unique:users,username|max:80',
      email: 'required|unique:users,email|max:254',
      password: 'required|max:60',
      contact: 'required|max:11',
      tipo: 'required|max:80',
    };
  }
  get messages() {
    return {
      // username
      'username.required': 'Você precisa de um usuário',
      'username.unique': 'Usuário já cadastrado',

      // email
      'email.required': 'Você precisa de um email ',
      'email.email': 'Você precisa de um email valido',
      'email.unique': 'Email já cadastrado',

      // Password
      'password.required': 'Você precisa de uma senha',

      // contact
      'password.required': 'Você precisa de uma senha',

      // tipo
      'tipo.required': 'Você precisa definir um tipo',
    };
  }
}


module.exports = StoreUser;
