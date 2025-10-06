// app.js
console.log("=== MEU APP JAVASCRIPT ===");

let nome = "João";
let idade = 25;

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);

if (idade >= 18) {
    console.log("✅ Maior de idade");
} else {
    console.log("❌ Menor de idade");
}

// Função de exemplo
function calcularDobro(numero) {
    return numero * 2;
}

console.log(`O dobro de 5 é: ${calcularDobro(5)}`);