console.log("\n Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {  
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  } 
  contador += 1;
}


for (let cont = 0 ; cont < 3; cont ++) {  
    if (listaDeDestinos[contador] == destino) {
      destinoExiste = true;
    } 
    contador += 1;
  }

console.log("Destino existe", destinoExiste);
