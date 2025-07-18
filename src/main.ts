import { criarPessoa } from "./controllers/PessoaController";

document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector<HTMLFormElement>('form');
  formEl!.addEventListener('submit', enviarForm);
  const container = document.getElementById('container') as HTMLDivElement;
  const template = document.getElementById('accordion-template') as HTMLTemplateElement;

  async function enviarForm(event: Event) {
    event.preventDefault(); // <-- evita reload da página
    try {
      const { pessoa, response } = await criarPessoa(Object.fromEntries(new FormData(formEl!).entries()));

      // iziToast success
      iziToast.success({
        title: 'Sucesso',
        message: `${pessoa.nome}, ${pessoa.idade} anos.`,
        position: 'topRight'
      });

      // Clonar template
      const clone = template.content.cloneNode(true) as DocumentFragment;
      const details = clone.querySelector('details')!;
      clone.querySelector('.nome-idade')!.textContent = `${pessoa.nome} (${pessoa.idade} anos)`;
      clone.querySelector('.detalhes')!.textContent = `Detalhes:\n- Nome: ${pessoa.nome}\n- Idade: ${pessoa.idade}`;

      // Botão remover
      clone.querySelector('.btn-remove')!.addEventListener('click', e => {
        e.stopPropagation();
        details.remove();
      });

      // Evento toggle
      details.addEventListener('toggle', () => {
        if (details.open) {
          console.log('Pessoa selecionada:', pessoa);
        }
      });

      container.appendChild(clone);

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
