// variaveis e constantes

//var ano = 2025;
//console.log(ano);

//ano = 2026;
//console.log(ano);

//{
//   var nome = "Pedro";
//  console.log("dentro do escopo", nome);
//}

//var nome = "Tiago";
//console.log("fora do escopo", nome);

//{
//    let nome = "Pedro";
//    console.log("dentro do escopo", nome);
//}
//
//console.log("fora do escopo", nome);

// let, se definido dentro do escopo {}, só irá funcionar dentro do escopo.
// var, se definido dentro do escopo, também irá funcionar fora do escopo.

//let soma = 12 + "12";
//console.log(soma);

//conversão explícita
// let soma = 15 + Number("12");
// console.log(soma);

// let contador = 1;
// console.log(contador);

// contador++;
// contador++;
// console.log(contador);

// média ponderada

// const n1 = prompt("Digite a primeira nota");
// const n2 = prompt("Digite a segunda nota");
// const n3 = prompt("Digite a terceira nota");

// const p1 = 2;
// const p2 = 1;
// const p3 = 3;

// let soma = Number(n1 * p1) + Number(n2 * p2) + Number(n3 * p);
// console.log(soma);
// let media = soma / 6;
// console.log(media);

// AULA 2 - FUNÇÕES, ARRAYS e OBJETOS

// function helloworld() {
//     console.log("Hello World");
// }

// helloworld();

// const somarDoisNumeros = (numero1, numero2) => {
//     return numero1 + numero2;
// };

// const result = somarDoisNumeros(10, 3);
// const result2 = somarDoisNumeros(30, 60);

// console.log(result);
// console.log(result2);

// ARRAY

// const lista = [1, 2, 3];
// console.log(lista);

// const list = ["pedro", "tiago", "joao"];
// const index = list.length - 1;
// list.length - 1; (serve para pegar o ultimo item da lista)
// const lastItem = list[index];

// console.log(lastItem);

// let nome = "Alexandre";

// function boasVindas() {
//     console.log("Seja bem-vindo", nome);
// }

// boasVindas();

// Questão 1

// let nome = "Alexandre";

// function boasVindas() {
//     console.log("Seja bem vindo,", nome);
// }

// boasVindas();

// Questão 2

// let n1 = 10;
// let n2 = 7;

// function soma() {
//     console.log(n1 + n2);
// }

// soma();

// Questão 3

// let number = 8;

// function quadrado() {
//     console.log(number * number);
// }

// quadrado();

// questão 4

// let frutas = ["maçã", "banana", "uva", "laranja"];

// let primeiroItem = frutas[0];
// console.log("Primeiro item:", primeiroItem);

// let segundoItem = frutas[1];
// console.log("Segundo item:", segundoItem);

// let ultimoItem = frutas[frutas.length - 1];
// console.log("Ultimo Item:", ultimoItem);

// frutas.push("Abacaxi");

// frutas.shift();

// console.log(frutas);

// function tamanhoDoArray() {
//     console.log(frutas.length);
// }

// tamanhoDoArray();

// let animais = ["cachorro", "gato", "papagaio"];

// function tamanhoDoArray() {
//     console.log(animais.length);
// }

// tamanhoDoArray();

// let carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2020,
// };

// console.log(carro.marca);

// carro.cor = "Preto";

// console.log(carro);

// function descricaoCarro() {
//     console.log(carro);
// }

// descricaoCarro();

// let numeros = [100, 200, 300, 400];

// function primeiroItem() {
//     console.log(numeros[0]);
// }

// primeiroItem();

// let cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador"];

// function ultimoItem() {
//     console.log(cidades.at(-1));
// }

// ultimoItem();

// let nome = "Alexandre";
// let idade = "41";

// function criarPessoa() {
//     console.log(nome, idade);
// }

// criarPessoa();

// function criarPessoa(nome, idade) {
//     return {
//         nome: nome,
//         idade: idade,
//     };
// }

// let pessoa1 = criarPessoa("Alexandre", 41);
// let pessoa2 = criarPessoa("Gabriela", 40);

// let pessoas = [
//     criarPessoa
// ]

// console.log(pessoa1);
// console.log(pessoa2);

// let pessoas = [(criarPessoa("Ana", 25), criarPessoa("Carlos", 40))];

// console.log(pessoas);

// 1

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2

// let numero = prompt("digite um número para ver a tabuada:");

// for (let i = 0; i <= 10; i++) {
//     console.log(numero * i);
// }

// 3

// let n = 0;

// for (let i = 1; i <= 100; i++) {
//     console.log((n += i));
// }

// 4

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

let n = 0;
let i = 1;
let soma = n + i;
while (soma < 50) {
    console.log((soma += i));
    i++;
}
