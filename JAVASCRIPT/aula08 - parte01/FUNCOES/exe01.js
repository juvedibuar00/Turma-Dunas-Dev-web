// Escopo global
let global = "Eu estou em todo lugar";

function testarEscopo() {
  // Escopo local da função
  let local = "Só existo dentro desta função";
  console.log(global); // Funciona
  console.log(local);  // Funciona
}

testarEscopo();
console.log(global); // Funciona
// console.log(local); // ERRO! local não está definida aqui