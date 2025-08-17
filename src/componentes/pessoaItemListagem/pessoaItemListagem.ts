import { Pessoa } from "../../models/Pessoa";
import templateHTML from './pessoaItemListagem.html?raw';
const template = new DOMParser().parseFromString(templateHTML, 'text/html').querySelector('template');

export function criarComponenteListaPessoas(pessoa: Pessoa) {

    // Clonar template
    const clone = template!.content.cloneNode(true) as DocumentFragment;
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

    return clone;
}
