export class Endereco {
    private _cep: String;
    private _logradouro: String;

    private _numero: String;
    private _complemento: String;
    private _cidade: String;

    private _uf: String;

    constructor(cep: String, logradouro: string) {
        this._cep = cep;
        this._logradouro = logradouro;
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