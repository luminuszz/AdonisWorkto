'use strict';

class StoreForgorPassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: 'required|max:254',
    };
  }

  get messages() {
    return {
      'email.required': 'Campo vazio: email',
    };
  }
}

module.exports = StoreForgorPassword;
