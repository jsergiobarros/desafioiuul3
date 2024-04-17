import {Cliente} from "./Cliente";
import {Endereco} from "./Endereco";
import {ContaCorrente} from "./ContaCorrente";
let cliente = new Cliente('03585689874','sandro moreira da silva','8599877788',
    new Endereco('60858984','rua antonio almeida sobrinho','992','fortaleza','CE'))

let conta = new ContaCorrente(0,'88466385',cliente)


console.log(conta.calcularSaldo())
conta.depositar(100)
conta.depositar(100)
conta.depositar(100)
conta.sacar(50)

console.log(conta.calcularSaldo())


