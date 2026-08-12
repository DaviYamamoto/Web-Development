let idade = 16;
let texto = (idade < 18) ? "Menor" : "Maior";

console.log(texto);

const carros = ["Porsche","Mercedes","Fiat","BMW","Lamborguine","Audi"];

let texto1 = "";

for(let i=0;i<carros.length;i++){
    texto1 += carros[i]+" ";
}
console.log(texto1);

let texto2 = "";

let i=0;
while(i < 10){
    texto2 += "O número é: "+i+"\n";
    i++;
}
console.log(texto2);

let texto3 = ""
let i1=0;
do{
    texto3 += "\n O número é: " +i1;
    i1++;
}while(i1<10);

console.log(texto3);

let texto4 = "";

for(let x=0;x<10;x++){
    if(x == 3)
        {break;}
    texto4 += "\nO número é: "+x;
}
console.log(texto4);

let texto5 = "Olá Mundo";
let length = texto5.length;//pegar o comprimento da string
let char = texto5.charAt(0);//retorna o índice em uma string
let char1 = texto5.charCodeAt(0);//retorna o código do caracter em um índice especificado