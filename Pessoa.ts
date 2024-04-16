export abstract class Pessoa {
   
    private _cpf: String;
    private _telefone: String;
    private _nome: String;

    constructor(cpf:String,nome :String,telefone:String) {
        this._cpf=cpf
        this._nome=nome
        this._telefone=telefone

    }

    get cpf(): String {
        return this._cpf;
    }

    set cpf(value: String) {
        this._cpf = value;
    }

    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
    }

    get telefone(): String {
        return this._telefone;
    }

    set telefone(value: String) {
        this._telefone = value;
    }
}