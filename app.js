// Saída básica no terminal do servidor
console.log("--- INICIANDO A APLICAÇÃO NODE.JS ---");

// Declaração de massa de dados em memória
// Simula dados vindos de um banco de dados
const produtos = [
{ id: 1, nome: "Notebook", preco: 4500, ativo:true},
{ id: 2, nome: "Mouse", preco: 80, ativo:true },
{ id: 3, nome: "Teclado", preco: 150, ativo:false },
{ id: 4, nome: "Monitor", preco: 700, ativo: true },
{ id: 5, nome: "Cabo HDMI", preco: 30, ativo: false },
];

// Exibe a tabela completa no terminal
console.log("\n--- TODOS OS PRODUTOS REGISTRADOS ---");
console.table(produtos);

const produtosAtivos = produtos.filter((item) => {
    return item.ativo === true;
});

console.log('\n--- PRODUTOS ATIVOS NO SISTEMA ---');
console.table(produtosAtivos);


const limitePreco = 100;

const produtosPremiumAtivos = produtos.filter((item) => {
    const eAtivo = item.ativo ===true;
    const eCaro = item.preco > limitePreco;
    // Retorna True somente se ambas as regras forem válidas
    return eAtivo && eCaro;
})

console.log(`\n--- PRODUTOS ATIVOS ACIMA DE R$ ${limitePreco} ---`);
console.table(produtosPremiumAtivos);

console.log('\n--- VERIFICAÇÃO DE IMUTABILIDADE ---');
console.log(
    'Tamnho do Array Original',
    produtos.length
);
console.log(
    'Tamanho do Array Filtrado' ,
    produtosPremiumAtivos.length
);

