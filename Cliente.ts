import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import {IUsuario} from "./IUsuario";
import {ContaCorrente} from "./ContaCorrente";
import {ContaPoupanca} from "./ContaPoupanca";
import {Conta} from "./Conta";

export class Cliente extends Pessoa implements IUsuario{
    private _vip:boolean

    private _enderecos: Endereco[]=[]
    private _contas: (ContaCorrente|ContaPoupanca)[]=[]

    constructor(cpf:String,nome :String,telefone:String,endereco:Endereco) {
        super(cpf,nome,telefone)
        this._vip=this.autenticar()
        this._enderecos.push(endereco)
    }


    public adicionarConta(conta:(ContaCorrente|ContaPoupanca)){
        this.contas.push(conta)
    }

    set contas(value: (ContaCorrente | ContaPoupanca)[]) {
        this._contas = value;
    }

    get contas(): (ContaCorrente | ContaPoupanca)[] {
        return this._contas;
    }

    public autenticar(): boolean {
        return true
    }

    public adicionarEndereco(endereco: Endereco) {
        this._enderecos.push(endereco);
    }
    public listarEnderecos():void{
        for (let i of this._enderecos){
            console.log(i)
        }


    }
}
