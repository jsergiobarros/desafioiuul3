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


    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
    }

    get funcionarios(): Funcionario[] {
        return this._funcionarios;
    }

    set funcionarios(value: Funcionario[]) {
        this._funcionarios = value;
    }
}