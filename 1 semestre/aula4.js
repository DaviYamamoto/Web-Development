const { useSyncExternalStore } = require("react");

let texto1 = "Bom";
let texto2 = "Dia";
let texto3 = texto1.concat(" ", texto2); //juntar duas strings
console.log(texto3);

let texto = "Maça,Banana,Maracuja";
let parte1 = texto.slice(5,11); //fatiamento de strings
console.log(parte1);

let parte2 = texto.substring(12,20); //fatiamento tmb
console.log(parte2);

let uper = texto.toUpperCase(); //upercase - maiusculo
console.log(uper);
let lower = texto.toLowerCase(); //lowercase - minusculo
console.log(lower);

let texto4 = "      Agora é com o trim...         ";
let trim1 = texto4.trim(); //tira espaços desnecessários no final e começo da string
console.log(trim1);

// const readline = require('readline-sync');
// let nome1 = readline.question("Digite seu nome: ");
// console.log(nome1);

let resultado = texto1.repeat(4);
console.log(resultado);

let textoAtual = "Faculdade Fiap TDS";
let textoNovo = textoAtual.replace("Faculdade Fiap TDS","Cursos Alura FIAP"); //replace
console.log(textoNovo);
let texto5 = "Cachorro, Gato"
let textoNovo1 = texto5.replaceAll(texto5,"Animais");
console.log(textoNovo1);

let texto6 = "Por favor, localize no texto";
let index = texto6.indexOf("localize"); //localizar aonde está sua palavra/string
console.log(index);

let x  = 9.656;
x = x.toExponential(3);
console.log(x);
