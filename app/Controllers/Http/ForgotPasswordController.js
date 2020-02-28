"use strict";
// Import dependences
const User = use("App/Models/User");
const crypto = require("crypto");
const Mail = use("Mail");
const moment = require("moment");

class ForgotPasswordController {
  // "Store" method create token for password
  async store({ request, response }) {
    // Try init
    try {
      const { email } = request.all();
      // Method "findByOrfaill" for find user from email
      const user = await User.findByOrFail("email", email);
      // Use crypto lib for create randon token
      user.token = crypto.randomBytes(10).toString("hex");
      // Use new Date for include time for token expire
      user.token_created_at = new Date();

      await user.save();
      // Save on database

      // Use Adonis lib "Mail" from create automatic email
      await Mail.send(
        // dirname to email template from resources
        ["email.forgot_password"],
        {
          // used variables to email template
          email,
          token: user.token,
          link: `${request.input("redirect_url")}?token=${user.token}`
          // "Redirect_url" is used from create token url
          // obs: "Link" is used from create a url iclude token user
        },
        message => {
          message
            // Email params
            .to(user.email)
            .from("Abitat.live.com", "Davi")
            .subject("Recuperação de email");
        }
      );
      return response.send({ message: "Email enviado com sucesso" });
    } catch (error) {
      // Catch init
      return (
        response
          // If have error return erro.status and  "message"
          .status(error.status)
          .send({ error: { message: "Esse e-mail não existe" } })
      );
    }
  }

  async uptade({ request, response }) {
    // "Uptade" method for process token and save new password
    const { token, password } = request.all();
    // Recive "token" and "password" from request
    try {
      // try init
      // create "user" for find the User from "token"
      const user = await User.findByOrFail("token", token);
      // Use moment lib for put to time for token

      const tokenExpired = moment()
        // Use method "subtrack" from to define 2 days from token
        .subtract("2", "days")
        // The method "isAfter" define start of time
        .isAfter(user.token_created_at);

      if (tokenExpired) {
        // If tokenExpired = false, return message and status
        return response
          .status(401)
          .send({ error: { message: "Token expirado e.e" } });
      }
      /**
       * if tokenExpired = true, delete token,token_created_at
       and change the password
       */
      user.token = null;
      user.token_created_at = null;
      user.password = password;
      // Save  in database
      await user.save();
    } catch (error) {
      // If have error return erro.status and  "message"
      return response
        .status(500)
        .send({ error: { message: "Erro inesperado" } });
    }
  }
}

module.exports = ForgotPasswordController;

/**
 * c
 */
