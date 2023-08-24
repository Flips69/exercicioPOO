class Produtos{
    produto: string;
    preco: number; 

    constructor(produto: string, preco: number){
        this.produto = produto;
        this.preco = preco;
    }

    detalhesDosProdutos(){
        return "Produto: " + this.produto + "Preço: R$ " + this.preco;
    }

    desconto(desconto: number){
        return "Desconto de " +desconto + "% aplicado. Novo preço: R$"+(this.preco - (this.preco*desconto)/100);
    }

}

let produto1 = new Produtos("Iphone 14 ", 5966.00)
let produto2 = new Produtos("Tablet ", 2500.00)
let produto3 = new Produtos("Fone ", 500.00)

console.log(produto1.detalhesDosProdutos());
console.log(produto1.desconto(15));
console.log(produto2.detalhesDosProdutos());
console.log(produto2.desconto(10));
console.log(produto3.detalhesDosProdutos());
console.log(produto3.desconto(5));
