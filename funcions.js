// // Façam uma função que retorna um array ordenado

// function ordenaArray(arr){
//     return arr.sort((a,b) => a - b)
// }

// let lista = Array()

// console.log(ordenaArray([10,1,5,3,8,6,3,7]))

// function somaArray(arr){
//     let soma = 0
//     for(i=0;i<arr.length;i++){
//         soma += arr[i]
//     }
//     return soma
// }

// function maiorNumero(arr){
//     let maior = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > maior){
//             maior = arr[i]
//         }
//     }    
//     console.log(maior)
// }

// maiorNumero([2,1,5,22,8,6,3,7])



let nome = 'Julio César'

// console.log(nome.length)
// console.log(nome.charAt(0))
// console.log(nome.indexOf("C"))
// console.log(nome.replace("Julio","Cleyton"))
// console.log(nome.substr(6,5)) // Exclui uma parte da string
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log("    Wesley".trim()) // elimina os espaços em branco antes e depois do nome


// console.log(Math.ceil(100.2))
// console.log(Math.floor(100.2))
// console.log(Math.round(100.2))

// console.log(Math.sqrt(81))
// console.log(Math.cbrt(81))
// console.log(Math.pow(9,2))

// console.log(Math.abs(100.2))
// console.log(Math.random() * 100)

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())

// let date1 = new Date(7 , 7 , 2015)
// let date2 = new Date(7 , 7 , 2025)

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milisegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())

// console.log(milisegundosEntreDatas)

// let milisegundosPorDia = (1*24*60*60*1000)

// console.log(`"A diferença entre as datas é de: ${milisegundosPorDia}"`)

// function formataData(date){
//     return (`"${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}"`)
// }

// console.log(formataData(date1))

// Façam uma função que inverta uma string
// let invert = (nome) => {
//     let inv = ''
//     for (let i = nome.length - 1; i >= 0; i--) {
//       inv += nome[i]
//     }
//     return inv
//   } // inverte a string
//   console.log(invert(nome))

//   function inverterString(palavra) {
//     return palavra.split("").reverse().join("");
// }

// console.log(inverterString("Jacques"));

//Encontre o numero de vogais em uma string

// function numberVogais(str){

//     str.toUpperCase()
    
//     let soma = 0

//     for(let i = str.length-1 ; i<0 ; i--){
//         if(str[i] == "O" || str[i] == "E" || str[i] == "I" ||str[i] == "O" ||str[i] == "U"){
//             soma++
//         }
//     }
//     return soma
// }
// console.log(numberVogais("Jovem"))

// function countVowels(str){
//     let vowels = str.match(/[aeiou]/gi)
//     return vowels ? vowels.length : 0
// }

// console.log(countVowels("Jovem"))


// Gerar um numero aleatorio entre dois valores


// function numberotofive(n1,n2){
//     return (Math.random() * n1) * n2
// }

// console.log(numberotofive(1,5))

//Some duas matrizes

let m1 = [1,1,1,1]
let m2 = [1,1,1,1]

for(i=0;i<4;i++){
    for(j=0;j<4;i++){
        m1[i][j] += m2[i][j]
    }
}

console.table(m1)