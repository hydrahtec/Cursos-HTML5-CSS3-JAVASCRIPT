import entradaDados from 'readline-sync';

/*
let nome = entradaDados.question('Digite seu nome: ');
console.log(`Ola, ${nome}! \n`);
*/

//---------------------------------------------------

console.log('Soma entre dois numeros \n');

let x = entradaDados.question('Digite o primeiro valor: ');
let y = entradaDados.question('\nDigite o segundo valor: ');

let soma = Number(x) + Number(y);

console.log(`\nA soma entre ${x} + ${y} é ${soma}\n`);