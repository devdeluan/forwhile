console.log("Exercício 4");

let prompt = require ("prompt-sync")();

let numero = prompt ("Escolha um número de 0 a 10: ")

{
  for(let contador=0; contador<=10 ; contador++)
  console.log(contador + "  x  " + numero + " = "+ (numero * contador))
}