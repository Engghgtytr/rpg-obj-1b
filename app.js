class Personagem{
  constructor(nome,vida,ataque){
    this.nome = nome,
    this.vida = vida,
    this.ataque = ataque
  } }
 causaDano(personagem){
  personagem.recebeDano(this.ataque)
 }
 recebeDano(quantidade){
  this.vida = this.vida - quantidade
  if(this.vida <=0)
    this.vida ="morreu"
 }
class name {
    constructor(parameters) {
        
    }
}class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome,
            this.vida = vida,
            this.ataque = ataque
    }
    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }
    recebeDano(quantidade) {
       
        
        no = quantidade - this.ataque - dano
        this.vida = this.vida - quantidade
        if (this.vida <= 0)
            this.vida = "morreu"
    }
    estaVivo() {
        return this.vida > 0
    }
    mostraStatus() {
        console.log(this.nome + "| vida" + this.vida)
    }

}

const druida = new Personagem("obin", 150 ,15)
const guerreiro = new Personagem("thorfin",60,20)
const arqueiro = new Personagem("legolas",50,40)
const mago = new Personagem("Gandalf",40,70)
const assasino = new Personagem("mortis",30.60)
const clerigo = new Personagem("Ezra", 40,20)
const monge =  new Personagem("tatsu",60,30)
const druida = new Personagem("obin", 150, 15)
const guerreiro = new Personagem("thorfin", 60, 20)
const arqueiro = new Personagem("legolas", 50, 40)
const mago = new Personagem("Gandalf", 40, 35)
const assasino = new Personagem("mortis", 30, 50)
const clerigo = new Personagem("Ezra", 40, 20)
const monge = new Personagem("tatsu", 60, 30)

console.log(monge)
mago.causaDano(assasino)
assasino.mostraStatus()
console.log(assasino.estaVivo())