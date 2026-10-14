
/* QUESTÃO 1.1 */

const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];

console.log(categorias);


/* QUESTÃO 1.2 */

const codigosProdutos = [101, 102, 103, 104];

const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');

console.log(codigosProdutos);
console.log(fornecedores);


/* QUESTÃO 1.3 */

console.log(categorias[0]);

categorias[1] = 'Calçados';

console.log(categorias);


/* QUESTÃO 2.1 */

categorias.push('Livros');

categorias.pop();

categorias.unshift('Brinquedos');

categorias.shift();

console.log(categorias);


/* QUESTÃO 2.2 */

console.log(categorias.length);


/* QUESTÃO 2.3 */

console.log(categorias.indexOf('Calçados'));

console.log(categorias.includes('Eletrônicos'));


/* QUESTÃO 3.1 */

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}


/* QUESTÃO 3.2 */

for (const categoria of categorias) {
    console.log(categoria);
}


/* QUESTÃO 4.1 */

const produtos = [
    { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
    { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
    { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log(produtos[0].nome);


/* QUESTÃO 4.2 */

const produtosBaratos = produtos.filter(produto => produto.preco < 300.00);

console.log(produtosBaratos);

const precos = [50, 150, 200, 350, 400];

const multiplosDe100 = precos.filter(preco => preco % 100 === 0);

console.log(multiplosDe100);


/* QUESTÃO 4.3 */

const quantidades = [2, 3, 5, 10];

const totalItens = quantidades.reduce((acumulador, quantidade) => acumulador + quantidade, 0);

console.log(totalItens);

const valorTotalEstoque = produtos.reduce((acumulador, produto) => acumulador + produto.preco * produto.estoque, 0);

console.log(valorTotalEstoque);


/* QUESTÃO 4.4 */

const precosOriginais = [100, 200, 300];

const precosComDesconto = precosOriginais.map(preco => preco * 0.9);

console.log(precosComDesconto);

const nomesProdutos = produtos.map(produto => produto.nome);

console.log(nomesProdutos);


/* QUESTÃO 4.5 */

const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);

console.log(produtosOrdenados);


/* QUESTÃO 4.6 */

const existeEstoqueCritico = produtos.some(produto => produto.estoque < 5);

console.log(existeEstoqueCritico);

const inventario = [
    { nome: 'Teclado', estoque: 15 },
    { nome: 'Mouse', estoque: 2 },
    { nome: 'Headset', estoque: 10 }
];

const possuiEstoqueCritico = inventario.some(produto => produto.estoque < 5);

console.log(possuiEstoqueCritico);

const primeiroProdutoCritico = inventario.find(produto => produto.estoque < 5);

console.log(primeiroProdutoCritico);
