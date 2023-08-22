class Cachorro{
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number)
    {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    apresentar(){
        return "Oi, eu sou " + this.nome + " um " + this.raca +" de " + this.idade + " anos";
    }

    apresentarPara(humano: string){
        return "Olá " + humano + " eu sou " + this.nome + ", um cachorro " + this.raca + " de " + this.idade + " anos";
        }
}

let rex = new Cachorro("Rex", "Labrador", 3);
let thor = new Cachorro("Thor", "Bulldog", 2);
let cleiton = new Cachorro("Cleiton", "Vira Lata", 69);

console.log(rex.nome);
console.log(thor.nome);
console.log(cleiton.nome);
console.log(rex.apresentar());
console.log(thor.apresentar());
console.log(cleiton.apresentarPara("Séfra,"));
