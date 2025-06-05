// EX1 - Comparacao Impar Par
// let number = 5

// if(number % 2 == 1){
//     console.log('Impar')
// }
// else{
//     console.log('Par')
// }

// EX2 - Numero Maior
// let n1 = 25
// let n2 = 25
// let n3 = 25
// let n4 = 25
// let high = n1

//     if(high < n2) {
//         high = n2
// }
//     if(high < n3){
//         high = n3
// }
//     if(high < n4){
//         high = n4
// }
// console.log(high)


// EX3 - Calculado com entrada do usuario

// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt("Insira um valor: "))
// let valor2 = Number(prompt("Insira um valor: "))
// let op = prompt("Informe a operação desejada: (+,-,*,/)")
// let resultado = 0

// if(op == '+'){
//     resultado = valor1 + valor2
// }

// else if(op == '-'){
//     resultado = valor1 - valor2
// }

// else if(op == '*'){
//     resultado = valor1 + valor2
// }

// else if(op == '/'){
//     if(valor2 !== 0){
//     resultado = valor1 / valor2
// }
//     else{
//         console.log("Erro!")

//     }
// }
// console.log(resultado)


// switch

// let opcao = 1

// switch(opcao){
//     case 1:
//         console.log("Voce escolheu a primeira opcao")
//         break
//     case 2:
//         console.log("Voce escolheu a segunda opcao")
//         break
//     default:
//         console.log("Voce nao escolheu nenhuma opcao valida")
//         break
// }

// const prompt = require('prompt-sync')()

// let v1 = Number(prompt("Insira um numero: "))
// let v2 = Number(prompt("Insira um numero: "))
// let op = prompt("Escolha uma operacao (+,-,*,/):  ")
// let resultado = 0

// switch(op){
//     case "+":
//         resultado = v1 + v2
//         break
//     case "-":
//         resultado = v1 - v2
//         break
//     case "*":
//         resultado = v1 * v2
//         break
//     case "/":
//         if(v2 !== 0){
//         resultado = v1 / v2
//         break
//     }
//        else{
//         console.log("Erro!")
//         break
//        }
// }
// console.log(resultado)


// Exercicio 4 - verificar se o numero eh positivo negativo ou neutro

// const prompt = require('prompt-sync')()

// let v = Number(prompt("Digite um numero:"))

// if(v > 0){
//     console.log("O numero eh positivo")
// }
// else if(v < 0){
//     console.log("O numero eh negativo")
// }
// else{
//     console.log("O numero eh neutro")
// }

// Exercicio 5 - descubra se o ano eh bissexto

// const prompt = require('prompt-sync')()

// let ano = Number(prompt("Digite um ano: "))

// if(ano%4 == 0){
//     if(ano%100 == 0){
//        console.log("Negativo.") 
//     }
//     else{
//         console.log("Positivo.")
//     }
// }
// else{
//     console.log("Negativo.")
// }

// Exercicio 6 - definir faixa etaria para criancar, adolescentes e adultos e com o switch apresentar qual idade da pessoa e a faixa etaria

const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: "))

switch(true){

case (idade <= 10): 
    console.log("Criança.")
    break
case (idade <= 17):
    console.log("Adolescente.")
    break
case (idade >= 18 && idade <= 59):
    console.log("Adulto.")
    break
case (idade >= 60):
    console.log("Idoso.")
    break
default:
    console.log("Numero inválido.")
    break
}