import { Endereco } from "./endereco";
import { Pessoa } from "./Pessoa";
import {IUsuario} from "./IUsuario";

export class Cliente extends Pessoa implements IUsuario{
    private _vip:boolean



    private _enderecos: Endereco[]

    constructor(cpf:String,nome :String,telefone:String,endereco:Endereco) {
        super(cpf,nome,telefone)
        this._enderecos.push(endereco)

    }
    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }
    public autenticar(): boolean {
        return true
    }

    public adicionarEndereco(endereco: Endereco) {
        this._enderecos.push(endereco);
    }
    public listarEnderecos():string{
        return ""

    }
}
