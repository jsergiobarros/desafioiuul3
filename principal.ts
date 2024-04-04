import { Cliente } from "./cliente";
import { Endereco } from "./endereco";


var cliente = new Cliente();

cliente.nome = "João";
cliente.idade = 20;

var endereco1 = new Endereco('21920-310', 'Rua Professor Veríssimo');
var endereco2 = new Endereco('21920-000', 'Rua das Flores');

cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);

console.log("Nome do Cliente: " + cliente.nome);
console.log("Idade do Cliente: " + cliente.idade);
console.log("Endereços do cliente:");
for (let endereco of cliente.enderecos) {
    console.log(endereco.cep + " - " + endereco.logradouro);
}
