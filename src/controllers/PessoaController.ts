import { salvarPessoa } from '../services/PessoaService';
import { Pessoa } from '../models/Pessoa';

function formToJson(form: Record<string, any>) {
  if (form.idade !== undefined) {
    form.idade = Number(form.idade);
  }
  return form;
}

export async function criarPessoa(form: Record<string, any>) {
  return await salvarPessoa(new Pessoa(formToJson(form)));
}
