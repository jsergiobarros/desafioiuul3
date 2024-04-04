import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa {
    
    private _endereco: Endereco;

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = value;
    }
}
