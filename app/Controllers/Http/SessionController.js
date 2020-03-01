"use strict";

// SessionController for use authentication
class SessionController {
  async store({ request, response, auth }) {
    // Take email and password for disruption
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);
    // const "token" for use adonis method auth.attempt(),
    // using email and password for validation

    return token;
  }
}

module.exports = SessionController;
