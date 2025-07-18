import { Pessoa } from '../models/Pessoa';

export async function salvarPessoa(dados: Pessoa) {
  // Simula resposta assíncrona
  const respostaSimulada = {
    id: 123,
    nome: dados.nome,
    idade: dados.idade
  };

  const response = {
    ok: true,
    mensagem: 'Sucesso',
    json: async () => respostaSimulada
  };

  if (!response.ok) {
    throw new Error('Erro na requisição simulada');
  }

  const pessoa = new Pessoa(await response.json());

  return { pessoa, response };
}
