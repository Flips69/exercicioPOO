"use strict";
var StatusPedidos;
(function (StatusPedidos) {
    StatusPedidos["AguardandoPreparo"] = "Aguardando Preparo";
    StatusPedidos["EmPreparo"] = "Em Preparo";
    StatusPedidos["SaiuParaEntrega"] = "Saiu Para Entrega";
    StatusPedidos["Entregue"] = "Entregue";
})(StatusPedidos || (StatusPedidos = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedidos.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutoDoPedido() {
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + "no valor" + this.produtos[i].valor);
        }
    }
}
const pedido1 = new ProdutoPedido("Fone", 99.90);
const pedido2 = new ProdutoPedido("Celular", 3529.00);
const pedido3 = new ProdutoPedido("Capinha", 30.00);
const novoPedido = new Pedido();
console.log("Status atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedidos.AguardandoPreparo);
novoPedido.adicionarProduto(pedido1);
novoPedido.adicionarProduto(pedido2);
novoPedido.adicionarProduto(pedido3);
console.log("Status atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedidos.EmPreparo);
console.log(novoPedido.exibirStatus());
novoPedido.exibirProdutoDoPedido();
