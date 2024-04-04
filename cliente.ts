import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa {
    
    private _enderecos: Endereco[] = [];

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public adicionarEndereco(endereco: Endereco) {
        this._enderecos.push(endereco);
    }
}
