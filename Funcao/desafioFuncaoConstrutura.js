function Pessoa (nome){

    this.AddNome = function() {
        nome = `Meu nome é ${nome}`
    }

    this.getMostrarNome = function () {
        return nome
    }
}

const p1 = new Pessoa ('Bruno')
p1.AddNome()
console.log(p1.getMostrarNome())

const p2 = new Pessoa('João')
p2.AddNome()
console.log(p2.getMostrarNome())


