import { criarComponenteListaPessoas } from "./componentes/pessoaItemListagem/pessoaItemListagem";
import { criarPessoa } from "./controllers/PessoaController";

document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector<HTMLFormElement>('form');
  formEl!.addEventListener('submit', enviarForm);
  const listaPessoas = document.getElementById('listaPessoas') as HTMLDivElement;

  async function enviarForm(event: Event) {
    event.preventDefault();
    try {
      const { pessoa, response } = await criarPessoa(Object.fromEntries(new FormData(formEl!).entries()));

      // iziToast success
      iziToast.success({
        title: 'Sucesso',
        message: `${pessoa.nome}, ${pessoa.idade} anos.`,
        position: 'topRight'
      });

      listaPessoas.appendChild(criarComponenteListaPessoas(pessoa));

      formEl!.reset();

    } catch (error: any) {
      iziToast.error({
        title: 'Erro',
        message: error.message,
        position: 'topRight'
      });
    }
  }
});
