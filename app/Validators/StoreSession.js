'use strict';

class StoreSession {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: 'required|max:254|string',
      password: 'required|max:60|string',
    };
  }

  get messages() {
    return {
      'email.required': 'campo vazio: email',
      'password.required': 'campo vazio: password',
    };
  }
}

module.exports = StoreSession;
