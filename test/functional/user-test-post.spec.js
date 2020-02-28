const { test, trait } = use("Test/Suite")("Cadastro");
const User = use("App/Models/User");
trait("Test/ApiClient");

test("Teste de cadastro", async ({ client }) => {
  const response = await client
    .post("/users")
    .send({
      username: "dsfddsadsasffd43vgff",
      email: "teste@teste.com",
      password: "2656dsa5565",
      contact: "454546",
      tipo: "sadasda"
    })
    .end();
  response.assertStatus(200);
  response.assertJSONSubset({
    username: "dsfddsadsasffd43vgff",
    email: "teste@teste.com",
    contact: "454546",
    tipo: "sadasda"
  });
  // eslint-disable-next-line no-unused-vars
  const user = await User.findBy("email", "carlds43os@dsadsad324");
});

/**
 * response.assertStatus(200);
  response.assertJSONSubset([
    {
      username: "dsfddsadsasffd43vgff",
      email: "carlds43os@dsadsad324",
      password: "2656dsa5565",
      contact: "454546",
      tipo: "sadasda"
    }
  ]);
   .post("/users")
    .header("Content-Type", "application/json")
    .accept("json")
    .type("json")
    .send({
      username: "dsfdsffddsadas43vgff",
      email: "carlds43os@dsadsad324.com",
      password: "2656dsa5565",
      contact: "454546",
      tipo: "sadasda"
    })
    .end();
 */
