"use strict";
const { test, trait } = use("Test/Suite")("Forgot Password");
const Mail = use("Mail");
const User = use("App/Models/User");
trait("Test/ApiClient");
const crypto = require("crypto");

test("Teste de envio de senha", async ({ client }) => {
  Mail.fake();

  const userCreate = await User.create({
    username: "teste2teste",
    email: "teste2@teste.com",
    contact: "dsadasd",
    password: "2656dsa5565",
    tipo: "dasd"
  });
  const user = await User.findByOrFail("email", "teste2@teste.com");
  user.token = await crypto.randomBytes(10).toString("hex");
  console.log(user);
});
/**
 * const response = await client
    .post("/users")
    .send({
      email: "teste2@teste.com"
    })
    .end();
  Mail.restore();

  response.assertJSONSubset({});
  response.assertStatus(200);
 */
