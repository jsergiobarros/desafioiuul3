import {Debito} from "./Debito";
import {Credito} from "./Credito";
import {Cliente} from "./Cliente";

export abstract class Conta {
    private _numero: String;
    private _cliente:Cliente
    private _saldo:number
    private _debitos:Debito[]
    private _credito:Credito[]
    constructor(numero:String,cliente:Cliente) {
        this._numero=numero
        this._cliente=cliente
    }

    public depositar(valor:number):String{
        this._saldo+=valor
        this._credito.push(new Credito(valor))
        return 'depósito de'+ valor +' realizado comm sucesso, seu novo saldo é '+this._saldo
    }

    public sacar(valor:number):String{
        if (this._saldo<valor)
            return "Saldo insuficiente para realizar a operação"
        this._debitos.push(new Debito(valor))
        this._saldo-=valor
        return 'saque de'+ valor +' realizado comm sucesso, seu novo saldo é '+this._saldo

    }


}