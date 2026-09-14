class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque);
    }

    recebeDano(quantidade) {
        this.vida = this.vida - quantidade;

        if (this.vida <= 0) {
            this.vida = "morreu";
        }
    }
}

const druida = new Personagem("Orbin", 150, 15);
const guerreiro = new Personagem("Thorin", 60, 20);
const mago = new Personagem("Gandalfe", 60, 35);
const arqueiro = new Personagem("Legolas", 80, 25);
const dragao = new Personagem("Shenlong", 200, 40);
const ninja = new Personagem("Minato", 70, 70);
const ciclope = new Personagem("X", 180, 25);

const personagens = {
    druida,
    guerreiro,
    mago,
    arqueiro
}

personagens.forEach(funtion(personagens)){
    personagens.mostrarStatus()
}

function proximoTurno(){
  turno = turno + 1
  jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

proximoTurno()
console.log(turno)
console.log(jogadorAtual)