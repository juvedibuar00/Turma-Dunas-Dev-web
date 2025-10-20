// NOSSO VETOR PRINCIPAL - Aqui armazenamos as tarefas
let tarefas = [];

// 🔍 PEGANDO ELEMENTOS DO HTML
const inputTarefa = document.getElementById('inputTarefa');
const listaTarefas = document.getElementById('listaTarefas');
const totalElement = document.getElementById('total');

// FUNÇÃO PARA ADICIONAR TAREFA
function adicionarTarefa() {
    // Pegando o texto digitado
    const texto = inputTarefa.value.trim();
    
    // Verificando se não está vazio
    if (texto !== '') {
        // ADICIONANDO AO VETOR
        tarefas.push(texto);
        
        // Atualizando a tela
        atualizarLista();
        
        // Limpando o input
        inputTarefa.value = '';
        
        // Colocando o foco de volta no input
        inputTarefa.focus();
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}

// FUNÇÃO PARA ATUALIZAR A TELA
function atualizarLista() {
    // Limpando a lista atual
    listaTarefas.innerHTML = '';
    
    // PERCORRENDO O VETOR E CRIANDO ELEMENTOS
    tarefas.forEach((tarefa, index) => {
        // Criando elemento <li>
        const li = document.createElement('li');
        li.className = 'tarefa-item';
        
        // Colocando conteúdo no <li>
        li.innerHTML = `
            <span>${tarefa}</span>
            <button onclick="removerTarefa(${index})">❌</button>
        `;
        
        // Adicionando à lista
        listaTarefas.appendChild(li);
    });
    
    // Atualizando estatísticas
    totalElement.textContent = tarefas.length;
}

// FUNÇÃO PARA REMOVER TAREFA
function removerTarefa(index) {
    // Removendo do vetor
    tarefas.splice(index, 1);
    
    // Atualizando a tela
    atualizarLista();
}

// EVENTO PARA ADICIONAR COM ENTER
inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

// INICIANDO NOSSA APLICAÇÃO
atualizarLista();