export class Endereco {
    private _cep: String;
    private _logradouro: String;

    constructor(cep: String, logradouro: string) {
        this._cep = cep;
        this._logradouro = logradouro;
    }

    public get cep(): String {
        return this._cep;
    }
    public set cep(value: String) {
        this._cep = value;
    }

    public get logradouro(): String {
        return this._logradouro;
    }
    public set logradouro(value: String) {
        this._logradouro = value;
    }
}