import {Conta} from "./Conta";

export class Credito {
    private _valor: number
    private data: Date
    constructor(valor:number) {
        this._valor=valor
        this.data=new Date()
    }

    get valor(): number {
        return this._valor;
    }
}