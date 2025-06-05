// class carExemplo {
//     constructor(nome,cor){
//         this.nome = nome
//         this.cor = cor
//     }
// }

// let car = new carExemplo("McQueen","Vermelho")
// let car2 = new carExemplo("Sally","Azul")
// let car3 = new carExemplo("Camaro","Amarelo")

// console.log(car.nome)
// console.log(car2.nome)
// console.log(car3.nome)

//array é uma estrutra de dados unidimensional de tamanho fixo que pode conter numeros ou objetos
//lista é um junção de vários elementos em que um aponta pro outro, e o primeiro é o ultimo

//classe é um molde de uma estrutura
//objeto é quando é feito

class Node{
    constructor(valor){
        this.valor = valor
        this.proximo = null
    }
}

new Node()

class LinkedList{
    constructor(){
        this.head = null
    }

    inserirValor(v){
        let novo = new Node(v)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir(){
        let atual = this.head
        let str = ""
        while(atual){
            str += atual.valor + "-->" 
            atual = atual.proximo
        }
        str += null
        console.log(str)
    }
}

let lista = new LinkedList()

lista.inserirValor(4)
lista.inserirValor(3)

lista.imprimir()

