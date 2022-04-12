const http = require("http"); // importando um módulo nativo
const listaDeMoedas = require("./moedas.json"); // importando do meu projeto

const app = http.createServer((req, res) => {
  console.log(listaDeMoedas);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json"); // explicando que o conteúdo que estamos devolvendo é do tipo json
  const respostaEmJson = JSON.stringify(listaDeMoedas);

  res.write(respostaEmJson);

  res.end();
});

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
