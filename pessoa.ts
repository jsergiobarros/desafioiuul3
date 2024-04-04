export class Pessoa {
   
    private _nome: String;
    private _idade: Number;
    
    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    public get idade(): Number {
        return this._idade;
    }
    public set idade(value: Number) {
        this._idade = value;
    }

}