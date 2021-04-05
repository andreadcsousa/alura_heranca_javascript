import { Cliente } from "./Cliente.js";
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente ("Andrea", 11122233309, "456");

/*
const contaCorrenteAndrea = new ContaCorrente (cliente1, 1001);
contaCorrenteAndrea.depositar (500);
contaCorrenteAndrea.sacar (100);

const contaPoupancaAndrea = new ContaPoupanca (50, cliente1, 1001);

const contaSalarioAndrea = new ContaSalario (cliente1);
contaSalarioAndrea.depositar (100);
contaSalarioAndrea.sacar (10);

console.log (contaCorrenteAndrea);
console.log (contaPoupancaAndrea);
console.log (contaSalarioAndrea);
*/

const diretor = new Diretor ("Andrea", 11122233309, 10000);
diretor.cadastrarSenha ("123456");

const gerente = new Gerente ("Neuza", 88822233309, 5000);
gerente.cadastrarSenha ("123");

const clienteEstaLogado = SistemaAutenticacao.login (cliente1, "456");
const diretorEstaLogado = SistemaAutenticacao.login (diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login (gerente, "123");

console.log (clienteEstaLogado, diretorEstaLogado, gerenteEstaLogado);