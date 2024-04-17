import {Cliente} from "./Cliente";
import {Endereco} from "./Endereco";
import {ContaCorrente} from "./ContaCorrente";
import {ContaPoupanca} from "./ContaPoupanca";

let cliente = new Cliente('03585689874','sandro moreira da silva','8599877788',
    new Endereco('60858984','rua antonio almeida sobrinho','992','fortaleza','CE'))

let conta = new ContaCorrente(0,'31402',cliente)

let cliente2 = new Cliente('09786666843','Amanda Moreira Acioli','8588877788',
    new Endereco('60858984','rua soslaio de dentro','88','fortaleza','CE'))

let conta2 = new ContaCorrente(0,"0234-13",cliente2)

conta.depositar(300)
conta.limite=100
conta2.depositar(100)
conta.transferir(conta2,1000)