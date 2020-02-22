'use strict';

class StoreChangePassword {
  get validateAll() {
    return true;
  }
  get rules() {
    return {
      token: 'required',
      password: 'required|max:60',
    };
  }

  get messages() {
    return {
      'token.required': 'Você precisa de um token para continuar',
      'password.required': 'Campo vazio: Senha',
    };
  }
}

module.exports = StoreChangePassword;
