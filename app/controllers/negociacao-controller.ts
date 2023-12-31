import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {

    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoes-view')

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {

        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.negociacoesView.update(this.negociacoes)
        this.limparFormulario()
        console.log(this.negociacoesView)
        
    }

    criaNegociacao(): Negociacao {
        
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(data, quantidade, valor)

    }

    limparFormulario(): void {

        this.inputData.value = ''
        this.inputQuantidade.value = '1'
        this.inputValor.value = '0.0'
        this.inputData.focus()

    }

}