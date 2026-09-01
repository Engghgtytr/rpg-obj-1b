class Personagem {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome
    this.vida = vida
    this.vidaMaxima = vida
    this.ataque = ataque
    this.defesa = defesa
  }

  curar(quantidade) {
    this.vida = this.vida + quantidade
    
    if (this.vida > this.vidaMaxima) {
      this.vida = this.vidaMaxima
    }
  }

  recebeDano(quantidade) {
    let dano = quantidade - this.defesa
    if (dano < 0) {
      dano = 0
    }
    this.vida = this.vida - dano
    if (this.vida < 0) {
      this.vida = 0
    }
  }

  estaVivo() {
    return this.vida > 0
  }

  mostrarStatus() {
    console.log(this.nome + " | Vida: " + this.vida)
  }

  causaDano(personagem) {
    personagem.recebeDano(this.ataque)
  }
}

const guerreiro = new Personagem("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80, 25)
const druida = new Personagem("marcus", 70, 10)
const bardo = new Personagem("divaldo", 35, 55)
const ocultista = new Personagem("carcos", 90, 35)

guerreiro.causaDano(arqueiro)
mago.causaDano(arqueiro)
druida.causaDano(arqueiro)
ocultista.causaDano(arqueiro)
bardo.causaDano(arqueiro)
arqueiro.mostrarStatus()
console.log(arqueiro.estaVivo())