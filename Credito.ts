import {Conta} from "./Conta";

export class Credito {
    private valor: number
    private data: Date
    constructor(valor:number) {
        this.valor=valor
        this.data=new Date()
    }

}