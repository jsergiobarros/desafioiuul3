// ○ Crie um cliente e adicione 3 endereços a ele
// ○ Imprima os endereços deste cliente

import {Cliente} from "./Cliente";
import {Endereco} from "./Endereco";

let cliente = new Cliente('03585689874','sandro moreira da silva','8599877788',
    new Endereco('60858984','rua antonio almeida sobrinho','992','fortaleza','CE'))

let endereco1 =new Endereco('60888999','alameda almeida alcantara','12','solonopoles','SP')
let endereco2 =new Endereco('60824235','rua jose ribamar soares aguiar','12','tangamandapio','MG')
cliente.adicionarEndereco(endereco1)
cliente.adicionarEndereco(endereco2)

cliente.listarEnderecos()
