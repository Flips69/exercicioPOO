class Evento {
    nome: string;
    data: string;
    horario: string;
    
    constructor(nome: string, data: string, horario: string){
        this.nome = nome;
        this.data = data;
        this.horario = horario
    }
}

class Agenda {
    eventos: Evento[] = [];

    constructor(){

    }

    adicionarLista(evento: Evento) {
        this.eventos.push(evento);
    }

    visualizar() {
        for(let i=0; i< this.eventos.length; i++){
            console.log("Evento: " + this.eventos[i].nome + " na data " + this.eventos[i].data + " as " + this.eventos[i].horario)
        }
    }

    remover(evento: Evento) {
        this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
    }
}

const evento1 = new Evento("Balada Bala", "20/11/2023", "00:56");
const evento2 = new Evento("Festa do Japa", "21/11/2023", "00:57");
const evento3 = new Evento("Festa do Balacobaco", "22/11/2023", "00:58");

const minhaAgenda = new Agenda();

minhaAgenda.adicionarLista(evento1);
minhaAgenda.adicionarLista(evento2);
minhaAgenda.adicionarLista(evento3);
console.log(minhaAgenda.visualizar());
console.log(minhaAgenda.remover(evento2));
console.log(minhaAgenda.visualizar());