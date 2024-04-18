import { Pessoa } from "./Pessoa";
import {IUsuario} from "./IUsuario"
import {Cargo} from "./Cargo";
import {Endereco} from "./Endereco";

export class Funcionario extends Pessoa  implements IUsuario{
    private _salario:number
    private _cargos:Cargo[]=[]


    constructor(cpf:String,nome :String,telefone:String,cargo:Cargo) {
        super(cpf,nome,telefone)
        cargo.funcionarios.push(this)
        this.cargos.push(cargo)

    }
    public removeCargo(cargo:String):void{



        this.cargos.splice(this.cargos.map(e => e.nome).indexOf(cargo),1)

    }

    public adicionaCargo(cargo:Cargo){
        cargo.adicionaFuncionario(this)
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