const TarefaApp = require("../tarefaApp")

describe('Adicionar, listar e finalizar tarefas', () => {
  test('Deveria adicionar três tarefas corretamente', () => {
    const meuAppDeTarefa = new TarefaApp();

    meuAppDeTarefa.adicionarTarefa("Estudar sobre teste de regressão");
    meuAppDeTarefa.adicionarTarefa("Ir para o estágio");
    meuAppDeTarefa.adicionarTarefa("Ir para a academia");

    expect(meuAppDeTarefa.tarefas.length).toBe(3);

    expect(meuAppDeTarefa.tarefas[0].id).toBe(1);
    expect(meuAppDeTarefa.tarefas[0].descricao).toBe('Estudar sobre teste de regressão');
    expect(meuAppDeTarefa.tarefas[0].finalizada).toBe(false);

    expect(meuAppDeTarefa.tarefas[1].id).toBe(2);
    expect(meuAppDeTarefa.tarefas[1].descricao).toBe('Ir para o estágio');
    expect(meuAppDeTarefa.tarefas[1].finalizada).toBe(false);


    expect(meuAppDeTarefa.tarefas[2].id).toBe(3);
    expect(meuAppDeTarefa.tarefas[2].descricao).toBe('Ir para a academia');
    expect(meuAppDeTarefa.tarefas[2].finalizada).toBe(false);
  });

  test('Deveria listar tarefas adicionadas corretamente', () => {
    const meuAppDeTarefa = new TarefaApp();

    meuAppDeTarefa.adicionarTarefa("Estudar sobre teste de regressão");
    meuAppDeTarefa.adicionarTarefa("Ir para o estágio");
    meuAppDeTarefa.adicionarTarefa("Ir para a academia");

    const consoleSpy = jest.spyOn(console, 'log');
    meuAppDeTarefa.listarTarefas();

    expect(consoleSpy).toHaveBeenCalledWith('Lista de Tarefas:');
    expect(consoleSpy).toHaveBeenCalledWith('ID: 1, Descrição: Estudar sobre teste de regressão, Status: Pendente');
    expect(consoleSpy).toHaveBeenCalledWith('ID: 2, Descrição: Ir para o estágio, Status: Pendente');
    expect(consoleSpy).toHaveBeenCalledWith('ID: 3, Descrição: Ir para a academia, Status: Pendente');

  });

  test("Deveria finalizar uma tarefa corretamente", ()=>{
    const meuAppDeTarefa = new TarefaApp();

    meuAppDeTarefa.adicionarTarefa("Estudar sobre teste de regressão");
    meuAppDeTarefa.adicionarTarefa("Ir para o estágio");
    meuAppDeTarefa.adicionarTarefa("Ir para a academia");

    meuAppDeTarefa.finalizarTarefa(3)

    expect(meuAppDeTarefa.tarefas.length).toBe(3);

    expect(meuAppDeTarefa.tarefas[0].id).toBe(1);
    expect(meuAppDeTarefa.tarefas[0].descricao).toBe('Estudar sobre teste de regressão');
    expect(meuAppDeTarefa.tarefas[0].finalizada).toBe(false);

    expect(meuAppDeTarefa.tarefas[1].id).toBe(2);
    expect(meuAppDeTarefa.tarefas[1].descricao).toBe('Ir para o estágio');
    expect(meuAppDeTarefa.tarefas[1].finalizada).toBe(false);


    expect(meuAppDeTarefa.tarefas[2].id).toBe(3);
    expect(meuAppDeTarefa.tarefas[2].descricao).toBe('Ir para a academia');
    expect(meuAppDeTarefa.tarefas[2].finalizada).toBe(true);

    const consoleSpy = jest.spyOn(console, 'log');
    meuAppDeTarefa.listarTarefas();

    expect(consoleSpy).toHaveBeenCalledWith('Lista de Tarefas:');
    expect(consoleSpy).toHaveBeenCalledWith('ID: 1, Descrição: Estudar sobre teste de regressão, Status: Pendente');
    expect(consoleSpy).toHaveBeenCalledWith('ID: 2, Descrição: Ir para o estágio, Status: Pendente');
    expect(consoleSpy).toHaveBeenCalledWith('ID: 3, Descrição: Ir para a academia, Status: Concluída');
  })
});