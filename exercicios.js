// Conversao Celsiu para Fahrenheit

const prompt = require('prompt-sync')()

//let temperatura = Number(prompt("Digite um valor de temperatura: "))
//let conversao

//conversao = (temperatura * 9) / 5 + 32

//console.log(conversao)

// Exercicio 02

// let qtdHabitante = Number(prompt("Digite a quantidade de habitante: "))
// let qtdBrancos = Number(prompt("Digite a quantidade de votos em branco: "))
// let qtdNulos = Number(prompt("Digite a quantidade de votos nulos: "))
// let qtdValidos = Number(prompt("Digite a quantidade de votos validos: "))

// if(qtdBrancos + qtdNulos + qtdValidos == qtdHabitante){
//     console.log("A porcetagem de votos em branco: ", (qtdBrancos*100)/qtdHabitante)
//     console.log("A porcetagem de votos nulos: ", (qtdNulos*100)/qtdHabitante)
//     console.log("A porcetagem de votos validos: ", (qtdValidos*100)/qtdHabitante)
// }
// else {
//     console.log("A quantidade de habitantes para a quantidade de votos está diferente!")
// }

//A turma C é composta de 60 alunos, e a turma D de 20 alunos.
// Escreva um algoritmo que leia o percentual de alunos reprovados
// na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de
// alunos das duas turmas.

// let aprovadosD = Number(prompt("Digite a porcetagem de alunos aprovados na turma D: "))
// let reprovadosC = Number(prompt("Digite a porcetagem de alunos reprovados na turama C: "))

// console.log("A quantidade de alunos reprovados na C foi: ", (reprovadosC*60)/100)
// console.log("A quantidade de alunos reprovados na D foi: ", (20-(aprovadosD*20)/100))
// console.log("A porcetagem de alunos reprovados nas duas turmas foi: ", ((reprovadosC*60)/100 + (20-(aprovadosD*20)/100)) * 100 / 80)


//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). 
// Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.

// let dia = String(prompt("Digite o dia da semana: "))

// switch(dia){

// case 'Segunda':
//     console.log("Dia Útil")
//     break
// case 'Terça':
//     console.log("Dia Útil")
//     break
// case 'Quarta':
//     console.log("Dia Útil")
//     break
// case 'Quinta':
//     console.log("Dia Útil")
//     break
// case 'Sexta':
//     console.log("Dia Útil")
//     break
// case 'Sábado':
//     console.log("Final de Semana")
//     break
// case 'Domingo':
//     console.log("Final de Semana")
//     break
// default:
//     console.log("Não é um dia da semana.")
// }

///Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0.
//  Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
// Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

// let numero = 1

// do{
//     numero = Number(prompt("Digite um numero (diferente de 0):"))
//     console.log(numero)
//     if(numero > 0){
//         console.log("Positivo.")
//     }
//     else if(numero == 0){
//         break
//     }
//     else{
//         console.log("Negativo.")
//     }
// }while(numero !== 0)


//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. 
// Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". 
// Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. 
// Considere que a senha correta é o valor 2807.

let senha = 2807
let tentativa = 0

while(tentativa != 2807){
    tentativa = Number(prompt("Digite a senha: "))
    if(tentativa == senha){
        console.log("Acesso Permitido!")
        break
    }
    else{
        console.log("Senha Inválida!")
    }
}