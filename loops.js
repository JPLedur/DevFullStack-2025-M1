// let tabuada = 2
// let valor = 0

// while(tabuada <= 20){
//     console.log(tabuada*valor)
//     valor++
// }

// const prompt = require('prompt-sync')()

// let numeroTabuada = Number(prompt("Qual valor você quer contar? "))

// let contadora = 0

// while(contadora <= 5){
//     console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}`)
    
//     contadora++
// }


// let numero = 10
// let contadora = 1

// while(numero >= 0){
//     console.log(`${numero}`)
//     numero--
// }


// inicializacao, instancia, incremento

// let numero = 0

// for(numero=0;numero<10;numero++){
//     console.log(numero)
// }

const prompt = require('prompt-sync')()

let numero
let soma = 0
let contador = 0
for(i=0; numero !=0 ;i++){
    numero = Number(prompt("Digite um valor (diferente de 0): "))
    if(numero != 0){
        soma += numero
        contador++
    }
    else{
        break;
    }
}
console.log(soma/contador)