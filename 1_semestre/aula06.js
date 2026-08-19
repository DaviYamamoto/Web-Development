//Criamos uma variável para armazenar o valor do contador
let contador = 0;

//Selecionamos os elementos do HTML que queremos manipular 
//Usamos o ID que definimos lá no HTML
const display = document.getElementById("display");
const botao = document.getElementById("btnIncrementar");

//Criamos uma função que será executada no clique
function incrementar(){
    //Aumenta o valor da variável contador em 1
    contador = contador + 1;
    //Atualiza o texto que aparece na tela (o parágrafo #display)
    display.innerText = contador; //innerText altera só o texto dentro da tag(#)
    //Exibe no console do navegador para fins de depuração
    console.log("O valor atual é: " + contador);
}

//Adicionamos um "escutador de eventos" ao botão 
//Ele fica "ouvindo" quando o usuário clica e chama a função incrementar
botao.addEventListener("click", incrementar);
