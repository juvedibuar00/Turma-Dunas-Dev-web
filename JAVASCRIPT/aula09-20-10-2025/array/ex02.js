// 1. Criar um vetor para armazenar as notas de 5 alunos de uma turma
// Jeito inteligente - SIMPLES E ORGANIZADO!
let notas = [7.5, 8.0, 6.5, 9.0, 7.0];

// Cálculo ficará MUITO mais fácil (veremos depois)
console.log("Todas as notas:", notas);


// 2. Entendendo a estrutura de um vetor (array)
/*
"Pensem em um vetor como uma ****ESTANTE COM PRATELEIRAS🪜:

Cada prateleira tem um número (chamamos de ÍNDICE)

Cada prateleira guarda um valor (chamamos de ELEMENTO)

A primeira prateleira é sempre a de número 0"
*/

// 3. Exemplos de vetores em JavaScript
// ANATOMIA DE UM VETOR
//Estrutura Básica:
// let nomeDoVetor = [elemento1, elemento2, elemento3, ..., elementoN];
// index:        0          1          2               N-1

// Exemplos:
// criação de vetores com diferentes tipos de dados (crie nome do arquivo)
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];
let numeros = [10, 20, 30, 40, 50];
let misturado = ["Texto", 100, true, null, 45.67];
console.log("Frutas:", frutas);
console.log("Números:", numeros);
console.log("Misturado:", misturado);


// 4. Acessando elementos de um vetor
let primeiraFruta = frutas[0]; // "Maçã"
let segundoNumero = numeros[1]; // 20
console.log("Primeira fruta:", primeiraFruta);
console.log("Segundo número:", segundoNumero);
console.log("Elemento misturado na posição 2:", misturado[2]); // true
// Tamanho do vetor
console.log("Tamanho do vetor de frutas:", frutas.length); // 4
console.log("Tamanho do vetor de números:", numeros.length); // 5
console.log("Tamanho do vetor misturado:", misturado.length); // 5
// Acessando o último elemento
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log("Último número:", numeros[numeros.length - 1]);
console.log("Último elemento misturado:", misturado[misturado.length - 1]);
// Tentando acessar um índice fora do tamanho do vetor
console.log("Acessando índice fora do vetor de frutas:", frutas[10]); // undefined
console.log("Acessando índice fora do vetor de números:", numeros[7]); // undefined

// 5. Modificando elementos de um vetor
frutas[1] = "Manga"; // Alterando "Banana" para "Manga"
numeros[3] = 100; // Alterando 40 para 100
console.log("Frutas após modificação:", frutas);
console.log("Números após modificação:", numeros);
misturado[0] = "Novo Texto"; // Alterando "Texto" para "Novo Texto"
console.log("Misturado após modificação:", misturado);
// Adicionando um novo elemento no final do vetor
frutas.push("Abacaxi");
console.log("Frutas após adicionar Abacaxi:", frutas);
numeros.push(60);
console.log("Números após adicionar 60:", numeros);
misturado.push(false);
console.log("Misturado após adicionar false:", misturado);

// 6. Exercício prático: Cálculo da média das notas dos alunos
// Refaça o exercício de cálculo da média usando vetores (arrays) conforme mostrado no ex01.js
let notasAlunos = [7.5, 8.0, 6.5, 9.0, 7.0];

let soma = 0;
for (let i = 0; i < notasAlunos.length; i++) {
    soma += notasAlunos[i];
} 
let mediaArray = soma / notasAlunos.length;
console.log("Média usando array:", mediaArray);

// Agora você pode ver como usar arrays torna o código mais simples e organizado!
// Refaça o exercício de cálculo da média usando vetores (arrays) conforme mostrado no ex01.js
let notasAlunosExercicio = [7.5, 8.0, 6.5, 9.0, 7.0];

let somaExercicio = 0;
for (let i = 0; i < notasAlunosExercicio.length; i++) {
    somaExercicio += notasAlunosExercicio[i];
}
let mediaArrayExercicio = somaExercicio / notasAlunosExercicio.length;
console.log("Média usando array (exercício):", mediaArrayExercicio);
// Agora você pode ver como usar arrays torna o código mais simples e organizado!



