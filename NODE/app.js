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



console.log("Programa finalizado. Pressione Enter para sair...");
process.stdin.resume();


// Comando para manter o terminal aberto
console.log("Programa finalizado. Pressione Enter para sair...");
process.stdin.resume();
