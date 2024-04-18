import {Cliente} from "./Cliente";

export class Endereco {
    private _cep: String;
    private _logradouro: String;

    private _numero: String;
    private _complemento: String;
    private _cidade: String;

    private _uf: String;
    private _clientes:Cliente[]=[]

    constructor(cep: String, logradouro: String,numero:String,cidade:String, uf:String, complemento='') {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero=numero
        this.cidade=cidade
        this.uf=uf
        this.complemento=complemento
    }
    public adicionaCliente(cliente:Cliente):void{
        this.clientes.push(cliente)
    }
    public removeCliente(cliente:String):void{
        this.clientes.splice(this.clientes.map(e => e.nome).indexOf(cliente),1)

    }

    get clientes(): Cliente[] {
        return this._clientes;
    }

    get cep(): String {
        return this._cep;
    }

    set cep(value: String) {
        this._cep = value;
    }

    get logradouro(): String {
        return this._logradouro;
    }

    set logradouro(value: String) {
        this._logradouro = value;
    }

    get numero(): String {
        return this._numero;
    }

    set numero(value: String) {
        this._numero = value;
    }

    get complemento(): String {
        return this._complemento;
    }

    set complemento(value: String) {
        this._complemento = value;
    }

    get cidade(): String {
        return this._cidade;
    }

    set cidade(value: String) {
        this._cidade = value;
    }

    get uf(): String {
        return this._uf;
    }

    set uf(value: String) {
        this._uf = value;
    }
}