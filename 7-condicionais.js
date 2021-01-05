console.log("Trabalhando com condicionais");
const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1); // nao vende qd eh menor de idade
} else if (estaAcompanhada) {
  console.log("Comprador está comprando");
  listaDeDestinos.splice(1, 1); // remove item
} else {
  console.log("Não é maior de idade não posso vender");
}

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);

//listaDeDestinos.splice(1,1); //removendo item compra
console.log(listaDeDestinos);
