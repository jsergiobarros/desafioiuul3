import { Pessoa } from "./Pessoa";
import {IUsuario} from "./IUsuario"
import {Cargo} from "./Cargo";
import {Endereco} from "./Endereco";

export class Funcionario extends Pessoa  implements IUsuario{
    private _salario:number
    private _cargos:Cargo[]=[]


    constructor(cpf:String,nome :String,telefone:String,cargo:Cargo) {
        super(cpf,nome,telefone)
        this._cargos.push(cargo)

    }
    public autenticar():boolean{
        return true
    }

}