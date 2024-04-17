import { Pessoa } from "./Pessoa";
import {IUsuario} from "./IUsuario"
import {Cargo} from "./Cargo";
import {Endereco} from "./Endereco";

export class Funcionario extends Pessoa  implements IUsuario{
    private _salario:number
    private _cargos:Cargo[]=[]


    constructor(cpf:String,nome :String,telefone:String,cargo:Cargo) {
        super(cpf,nome,telefone)
        this.cargos.push(cargo)

    }
    public adicionaCargo(cargo:Cargo){
        this.cargos.push(cargo)
    }
    public autenticar():boolean{
        return true
    }


    get salario(): number {
        return this._salario;
    }

    set salario(value: number) {
        this._salario = value;
    }

    get cargos(): Cargo[] {
        return this._cargos;
    }

    set cargos(value: Cargo[]) {
        this._cargos = value;
    }
}