console.log("Exercício 8");

let prompt = require("prompt-sync")();


let numero = parseFloat (prompt("Digite a idade: "))

 while (numero < 18) {
 numero = parseFloat(prompt("Digite a idade: "))
}
console.log ("Maior de idade")