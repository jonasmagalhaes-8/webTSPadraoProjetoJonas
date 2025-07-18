export class Pessoa {
  nome: string = '';
  idade: number = 0;

  constructor(obj: Partial<Pessoa> = {}) {
    Object.assign(this, obj);
  }
}
