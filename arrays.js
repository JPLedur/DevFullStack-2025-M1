// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.

// Use métodos de array para calcular:

// A soma de todos os elementos.

// A média dos elementos. 
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares

// let numeros = [4,2,6,21,54,32,65,3,46,24]
// let par = []
// let soma = 0
// let media = 0

// for(i=0;i<10;i++){
//     soma = numeros[i] + soma
//     if(numeros[i] % 2 ===0){
//         par.push(numeros[i])
//     }
// }
// media = soma / i


//console.table(numeros)
//console.log(soma)
//console.log(media)
//console.table(par)

// console.table(numeros)
// let soma = numeros.reduce((acumulador, valor) => acumulador + valor , 0)
// console.log(soma)
// let pares = numeros.filter((num => num % 2 === 0))
// console.table(pares)
// let media = soma / numeros.length
// console.log(media)



// Ordene o array numeros em ordem crescente
//bubbleSort
// let numeros = [4,2,6,21,54,32,65,3,46,24]
// let n = numeros.length
// let aux

// for(let i=0 ; i < n ; i++){
//     for(let j = 0 ;i < n - 1; j++){
//         if(numeros[j] > numeros[j+1]){
//             aux = numeros[j]
//             numeros[j] = numeros[j + 1]
//             numeros[j + 1] = aux
//         }
//     }
// }
// console.log(numeros)

//console.log(numeros.sort((a,b)=> a-b))

let matriz = []
let soma = 0

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10
    }
}

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(i == j){
            soma += matriz[i][j]
        }
    }
}

console.log(soma)
console.table(matriz)

// let mercado = []
// mercado['acogue'] = ['picanha','moela','coracao']
// mercado['fruteira'] = ['abacaxi','maca','morango']

// console.table(mercado)

let listaCoisas = Arrays()

// listaCoisas['hardware'] = ['Placa de Vídeo']
listaCoisas['hardware'][1] = ['Smartwatch']
listaCoisas['hardware'][0] = 'Placa de Vídeo'
listaCoisas['games'] = ['GTA VI']
listaCoisas['games'][1] = ['The Witcher'] 


console.table(listaCoisas)