'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AplicationGlobal {
  async handle({request}, next) {
    request.request.headers['accept'] = 'application/json';
    await next();
  }
}

module.exports = AplicationGlobal;
