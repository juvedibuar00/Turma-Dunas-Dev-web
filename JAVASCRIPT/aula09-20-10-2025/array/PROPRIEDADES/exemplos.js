// "length nos diz quantos elementos tem no vetor:"

let frutas = ["Maçã", "Banana", "Laranja"];

console.log("Quantidade de frutas:", frutas.length); // 3

// 💡 DICA SUPER IMPORTANTE: ÚLTIMO ELEMENTO
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]); // Laranja


/*
Modificando Elementos:
"Podemos TROCAR o que tem nas prateleiras:"
let notas = [7.5, 8.0, 6.5];

console.log("Notas originais:", notas); // [7.5, 8.0, 6.5]

// Modificando a segunda nota
notas[1] = 9.0;

console.log("Notas modificadas:", notas); // [7.5, 9.0, 6.5]
*/


/*
Adicionando Novos Elementos:
"E podemos ADICIONAR novas prateleiras:"

let times = ["Flamengo", "Vasco"];

console.log("Times antes:", times); // ["Flamengo", "Vasco"]
console.log("Tamanho antes:", times.length); // 2

// Adicionando novo time
times[2] = "Botafogo";

console.log("Times depois:", times); // ["Flamengo", "Vasco", "Botafogo"]
console.log("Tamanho depois:", times.length); // 3
*/




// Exercício

// Começamos com este vetor:
let produtos = ["Mouse", "Teclado", "Monitor"];

// TODO: Mostrem quantos produtos temos
console.log("Total de produtos:", produtos.length);

// TODO: Alterem "Teclado" para "Teclado Gamer"
produtos[1] = "Teclado Gamer";

// TODO: Adicionem "Headset" na próxima posição
produtos[3] = "Headset";

// TODO: Mostrem o vetor final
console.log("Produtos atualizados:", produtos);

