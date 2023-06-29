export class Negociacoes {
    constructor() {
        //Array<Negociacao> || Negociacao[]
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //ReadonlyArray<Negociacao> || readonly Negociacao[]
    lista() {
        return this._negociacoes;
    }
}
