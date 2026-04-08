/* Criar uma variável*/
let nome = "Sabrina";
let altura = 1.80;

/*Concatenação de strings */
console.log(nome+" possui "+altura+" de altura.");

/*Interpolação de strings */
console.log(`${nome} possui ${altura} de altura.`);

let numero = 10;
let texto = "10";

/*Comparação com igualdade (==)*/
console.log(numero == texto);

/*Comparação com igualdade estrita (===)*/
console.log(numero === texto);

/* Operador Lógico (E) -- Representação: && */
/*Operador Lógico (OU) -- Representação: ` */

let media = 5.5;

if(media>=6 && media<=10){
    console.log("Aluno aprovado");
}else if(media>=4 && media<6){
    console.log("Aluno de Exame");
}else{
    console.log("Aluno reprovado");
}

let valor = 3;

switch(valor){
    case 1:
        console.log("O valor é 1");
        break;
    case 2:
        console.log("O valor é 2");
        break;
    case 3:
        console.log("o valor é 3");
        break;
    case 4:
        console.log("O valor é 4");
        break;
    default:
        console.log("Opção inválida");

}

const readline = require('readline-sync');
let nome1 = readline.question('Digite o seu nome: ');

console.log(nome1);

/*Cenas dos próximos capítulos
Laço de repetição: for(), while() e do...while() */