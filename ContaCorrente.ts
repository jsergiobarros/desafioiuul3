import {Conta} from "./Conta";
import {ContaPoupanca} from "./ContaPoupanca";
import {Cliente} from "./Cliente";
import {Debito} from "./Debito";
import {Credito} from "./Credito";

export class ContaCorrente extends Conta{
    private _limite:number
    constructor(limite:number,numero:String,cliente:Cliente) {
        super(numero,cliente);
        this._limite=limite
        this.cliente.adicionarConta(this)
    }

    public depositar(valor:number):void{

        this.creditos.push(new Credito(valor))
        console.log( 'depósito de '+ valor +' realizado comm sucesso, seu novo saldo é '+this.calcularSaldo())
    }
    public sacar(valor: number) {
        if (valor>this.calcularSaldo()){
            console.log( "Saldo insuficiente para realizar a operação")
            return
        }
        this.debitos.push(new Debito(valor))
        console.log( 'saque de '+ valor +' realizado comm sucesso, seu novo saldo é '+this.calcularSaldo())
    }

    set limite(value: number) {
        this._limite = value;
    }

    public transferir(contaDestino: ContaCorrente|ContaPoupanca, valor:number){
        if (valor<this.calcularSaldo()){
            contaDestino.depositar(valor)
            this.sacar(valor)
            console.log("transferencia de R$"+ valor + " realizada com sucesso para " + contaDestino.cliente.nome)
            return
        }
        console.log("saldo insuficiente")


    }
    public calcularSaldo():number{
        let saldo = this._limite

        for(let i of this.creditos)
            saldo+=i.valor
        for(let i of this.debitos)
            saldo-=i.valor
        return saldo
    }
}