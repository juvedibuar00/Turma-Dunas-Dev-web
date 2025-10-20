// Jeito difícil - MUITO TRABALHOSO!
let notaAluno1 = 7.5;
let notaAluno2 = 8.0;
let notaAluno3 = 6.5;
let notaAluno4 = 9.0;
let notaAluno5 = 7.0;

// Cálculo da média - CÓDIGO REPETITIVO!
let media = (notaAluno1 + notaAluno2 + notaAluno3 + notaAluno4 + notaAluno5) / 5;
console.log("Média:", media);

// Jeito fácil - USANDO ARRAY!
let notasAlunos = [7.5, 8.0, 6.5, 9.0, 7.0];

// Cálculo da média - CÓDIGO SIMPLES!
let soma = 0;
for (let i = 0; i < notasAlunos.length; i++) {
    soma += notasAlunos[i];
}  
let mediaArray = soma / notasAlunos.length;
console.log("Média usando array:", mediaArray);