import {Funcionario} from "./Funcionario";

export class Cargo{
    private _nome:String
    private _funcionarios:Funcionario[]=[]

    constructor(nome:String) {
        this._nome=nome;

    }

    public adicionaFuncionario(funcionario:Funcionario){

        this.funcionarios.push(funcionario)
    }
    public removeFuncionario(nome:String):void{
        this.funcionarios.splice(this.funcionarios.map(e => e.nome).indexOf(nome),1)
    }

    get nome(): String {
        return this._nome;
    }



    get funcionarios(): Funcionario[] {
        return this._funcionarios;
    }


}