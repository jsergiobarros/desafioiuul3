import {Funcionario} from "./Funcionario";
import {Cargo} from "./Cargo";

let gerente=new Funcionario('01234578958','silmara moreira pedrosa','85999998778',new Cargo('gerente'))
let atendente=new Funcionario('98758498746','atenilson matilde de melo','85999998758',new Cargo('atendente'))

console.log(gerente,atendente)
