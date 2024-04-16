import {Funcionario} from "./Funcionario";

export class Cargo{
    private _nome:String
    private _funcionarios:Funcionario[]

    constructor(nome:String) {
        this._nome=nome;

    }

}