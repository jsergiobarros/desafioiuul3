import {Conta} from "./Conta";
import {Cliente} from "./Cliente";

export class ContaPoupanca extends Conta{

    constructor(numero:String,cliente:Cliente) {
        super(numero,cliente);
        this.cliente.adicionarConta(this)

    }

    public calcularSaldo():number{
        let saldo = 0

        for(let i of this.creditos)
            saldo+=i.valor
        for(let i of this.debitos)
            saldo-=i.valor
        return saldo
    }
}