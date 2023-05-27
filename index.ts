// Import stylesheets
import './style.css';

//Olá mundo
console.log('Olá, mundo!');

//Declarações
let x: number = 15;
console.log('O valor de x é ' + x);
let texto: string = `Testando o texto com concatenação do nuemto ${x}`;
console.log(texto);

//Condicionais
console.log('Verificando Condições');
if (x % 2 == 0) {
  console.log(`${x} é PAR`);
} else {
  console.log(`${x} é IMPAR`);
}

//Laços de Repetição
console.log('Usando laços de repetição');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('Varrendo um Array');
let numbers: number[] = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('Varrendo um Array com forEach');
numbers.forEach((n) => {
  console.log(n);
});

//Tupla
let eu = ['João', 18];
console.log(`Meu nome é: ${eu[0]} e tenho ${eu[1]} anos.`);

//Enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let color: Color = Color.Green;

//Any
let seCerteza: any = 4;
seCerteza = 'Acho que sou um texto';

//Function
function getSoma(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(`A soma de 2 e 3 é ${getSoma(2, 3)}`);

function getNomeCompleto(pessoa: {nome: string, sobrenome: string}): string{
  return `${pessoa.nome} ${pessoa.sobrenome}`
}
console.log(`Meu nome completo é ${getNomeCompleto({nome: 'Fábio', sobrenome: 'Souza'})}`)
