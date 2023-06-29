import { Negociacao } from './negociacao.js';

export class Negociacoes {

    //Array<Negociacao> || Negociacao[]
    private _negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao)

    }

    //ReadonlyArray<Negociacao> || readonly Negociacao[]
    lista(): ReadonlyArray<Negociacao> {

        return this._negociacoes

    }

}