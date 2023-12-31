const Tarefa = require("./tarefa");

class TarefaApp {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao) {
        const novaTarefa = new Tarefa(this.tarefas.length + 1, descricao, false);
        this.tarefas.push(novaTarefa);
    }

    listarTarefas() {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach(tarefa => {
          console.log(`ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Status: ${tarefa.finalizada ? 'Concluída' : 'Pendente'}`);
        });
    }

    finalizarTarefa(tarefaId) {
        const tarefa = this.tarefas.find(tarefa => tarefa.id === tarefaId);
        if (tarefa) {
            tarefa.finalizada = true;
        }
    }
}

module.exports = TarefaApp;
