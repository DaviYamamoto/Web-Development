//Criando uma data com o momento atual
const dataAtual = new Date();

//Exibe a data completa no console
console.log(dataAtual);

//Mostrar a data manipulada
console.log(dataAtual.getDate());

//Visualizar somente o mês
console.log(dataAtual.getMonth()+1); //exibe "3" pq vai de 0 a 11, por isso o "+1"

//Pegando o ano completo
console.log(dataAtual.getFullYear());

//Pegando hora, minutos e segundos
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

//Criando uma variável formatada manualmente
const data = new Date();
const dataFormatada = data.getDate()+" / "+(data.getMonth()+1) + " / "+data.getFullYear();
console.log("Data Formatada: " + dataFormatada);





//Arrays
let cores = ["azul", "rosa"];
cores.push("vermelho"); //adicionar no array(push)
console.log(cores);

cores.pop(); //remove o último elemento do array
console.log(cores);

//arrow function
let numeros = [1,2,3,4];
numeros.forEach(numero => {
    console.log(numero);
}); 

//Percorre o array e retorna um novo array com os valores transformados - manipula
let dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);

//Filter
let numeros1 = [1,2,3,4,5,10,20,30,40,50];
let maioresQueDez = numeros1.filter(numero => numero > 10);
console.log(maioresQueDez);

//Criando uma cópia usando o spread
const numeros2 = [1,2,3];
const copia = [...numeros2]; //"..." para fazer cópia fiel, se tivesse um null(nulo) não pegaria sem os três pontos
console.log("Original: " + numeros2 + "\nCopia: " + copia);

//Unindo os arrays com spread
const lista1 = [1,2];
const lista2 = [3,4];
const listaCompleta = [...lista1,...lista2];
console.log(listaCompleta);



/* Functions
Sintaxe de criação de funções

function nome(argumento1,argumento2,...,argumentoN) {
//Corpo da função
}
*/

//Calculadora com Funções
//Criar as variáveis
let numero11 =10, numero12 =2;

//Executa as 4 operações matemáticas
console.log(`Soma: ${somar(numero11,numero12)}`);
console.log(`Subtração: ${subtrair(numero11,numero12)}`);
console.log(`Multiplicação: ${multiplicar(numero11,numero12)}`);

const divisao = dividir(numero11,numero12); //nao pode ser igual o de cima por conta de, se dividir por 0, da erro. 

//Valida o resultado da divisão
if(divisao === Infinity)
    console.log("Não existe divisão por ZERO!");
else
    console.log(`Divisão: ${divisao}`);

//Funções de Cálculo
function somar(numero11,numero12){
    return numero11 + numero12;
}

function subtrair(numero11,numero12){
    return numero11 - numero12;
}

function multiplicar(numero11,numero12){
    return numero11 * numero12;
}

function dividir(numero11,numero12){
    return numero11 / numero12;
}
