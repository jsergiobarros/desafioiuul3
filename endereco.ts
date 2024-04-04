export class Endereco {
    private _cep: String;

    public get cep(): String {
        return this._cep;
    }
    public set cep(value: String) {
        this._cep = value;
    }
}