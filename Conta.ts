import {Debito} from "./Debito";
import {Credito} from "./Credito";
import {Cliente} from "./Cliente";

export abstract class Conta {
    private _numero: String;
    private _cliente:Cliente
    private _debitos:Debito[]
    private _credito:Credito[]
    constructor(numero:String,cliente:Cliente) {
        this._numero=numero
        this._cliente=cliente
    }

    public depositar(valor:number):String{
        this._credito.push(new Credito(valor))
        return
    }

    public sacar(valor:number):String{
        this._debitos.push(new Debito(valor))
        return

    }


}