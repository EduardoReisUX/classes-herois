class Heroi {
  #nome
  #idade
  #tipo

  /**
   * @param {string} nome
   * @param {number} idade
   * @param {"mago" | "guerreiro" | "monge" | "ninja"} tipo
   */
  constructor(nome, idade, tipo) {
    this.#nome = nome
    this.#idade = idade
    this.#tipo = tipo
  }

  atacar() {
    const ataques = {
      "mago": "magia",
      "guerreiro": "espada",
      "monge": "artes marciais",
      "ninja": "shuriken"
    }
    
    return `o ${this.#tipo} atacou usando ${ataques[this.#tipo]}`
  }
}

console.log(new Heroi("fulano", 43, "guerreiro").atacar())
console.log(new Heroi("ciclano", 17, "mago").atacar())
console.log(new Heroi("fulana", 29, "monge").atacar())
console.log(new Heroi("ciclana", 25, "ninja").atacar())
