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
        this.vip=this.autenticar()
        endereco.adicionaCliente(this)
        this.enderecos.push(endereco)
    }






    public adicionarConta(conta:(ContaCorrente|ContaPoupanca)){
        this.contas.push(conta)
    }




    public contaIndex(index=1):(ContaCorrente | ContaPoupanca){
        if (index>this.contas.length){
            console.log("usuário nao possui essa conta, tente outro index")
            return
        }
        return this.contas[index-1]
    }


    public autenticar(): boolean {
        return true
    }


    public adicionarEndereco(endereco: Endereco):void {
        this.enderecos.push(endereco);
    }
    public removerEndereco(logradouro: String):void {
        this.enderecos.splice(this.enderecos.map(e => e.logradouro).indexOf(logradouro),1)
    }
    public listarEnderecos():void{
        for (let i of this.enderecos){
            console.log(i)
        }
    }
    set vip(value: boolean) {
        this._vip = value;
    }
    set contas(value: (ContaCorrente | ContaPoupanca)[]) {
        this._contas = value;
    }
    get contas(): (ContaCorrente | ContaPoupanca)[] {
        return this._contas;
    }
    get enderecos(): Endereco[] {
        return this._enderecos;
    }
}
