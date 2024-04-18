import {Debito} from "./Debito";
import {Credito} from "./Credito";
import {Cliente} from "./Cliente";

export abstract class Conta {
    private _numero: String;
    get numero(): String {
        return this._numero;
    }

    private _cliente:Cliente
    private _saldo:number
    private _debitos:Debito[]=[]
    private _creditos:Credito[]=[]
    constructor(numero:String,cliente:Cliente) {
        this._numero=numero
        this._cliente=cliente
        this._saldo=0

    }


    get cliente(): Cliente {
        return this._cliente;
    }

    public get debitos(): Debito[] {
        return this._debitos;
    }

    public get creditos(): Credito[] {
        return this._creditos;
    }


    set debitos(value: Debito[]) {
        this._debitos = value;
    }

    set creditos(value: Credito[]) {
        this._creditos = value;
    }

    public depositar(valor:number):void{
        this._saldo+=valor
        this._creditos.push(new Credito(valor))
        console.log( 'depósito de '+ valor +' realizado comm sucesso, seu novo saldo é '+this._saldo)
    }

    public sacar(valor:number):void{
        if (this._saldo<valor){
            console.log( "Saldo insuficiente para realizar a operação")
            return
        }
        this._debitos.push(new Debito(valor))
        this._saldo-=valor
        console.log( 'saque de'+ valor +' realizado comm sucesso, seu novo saldo é '+this._saldo)

    }


}