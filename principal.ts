import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

var pessoa = new Pessoa();

pessoa.nome = "Victor Vidigal Ribeiro";
pessoa.idade = 36;

console.log(pessoa.nome);
console.log(pessoa.idade);

var endereco = new Endereco();
endereco.cep = '36030-140';

var cliente = new Cliente();
cliente.nome = "João";
cliente.endereco = endereco;