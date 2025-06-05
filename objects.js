// let livro= {
//     nome : 'Marley e eu',
//     anoLancamento : 2024,
//     atores : "Will Smith",

//     mostrarCaracteristicas: function(){
//         return `${this.nome} é um livro legal!` //this faz a representação do objetivo interno
//     }
// }

// console.log(livro.mostrarCaracteristicas())
// console.log(livro.nome)

// let jogadores = ['Neymar','Aguirre','Alemão']

// for(let key in jogadores){ //valor
//     console.log(jogadores[key])
// }

// let palavra = "Inter"

// for(let char of palavra){ // indice
//     console.log(char)
// }

// Calcular as medias dos alunos de um professor e ver se o professor esta na media:

// let professor = {
//     nome: "Stark Parker",
//     materia: "fisica",
//     notas: { 
//         aluno1: [5,2],
//         aluno2: [3,7]
//     }
// }

// let somaNotas = 0
// let numeroAlunos = 0

// for(let aluno in professor.notas){
//     somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc,nota) => acc + nota, 0) / professor.notas[aluno].length : professor.notas[aluno]

//     numeroAlunos++
// }

// console.log(somaNotas)

// let media = somaNotas / numeroAlunos

// console.log(media)

// if(media > 6){
//     console.log("A media está acima do padrão")
// }
// else{
//     console.log("A média está abaixo do padrão")
// }

// let livraria = [
//     {nome: "1984", autor: "George Orwell", ano: 1984},
//     {nome: "Drácula", autor: "Bram Stoek", ano: 1998},
//     {nome: "Anjos e Demônios", autor: "Dan Brown", ano: 2006},
//     {nome: "Código Limpa", autor: "Martin", ano: 2002},
//     {nome: "O Príncipie", autor: "Maquiável", ano: 1994},
// ]

// for(let livro of livraria){
//     if(livro.ano < 2000){
//         console.log(livro)
//     }
// }

// let filmes = [
//     {titulo: "Senhor do Aneís", genero: "Aventura"},
//     {titulo: "17 outra vez", genero: "Terror"},
//     {titulo: "Debby e Loide", genero: "Comédia"},
//     {titulo: "Tarzan", genero: "Aventura"},
//     {titulo: "Como eu era antes de você", genero: "Drama"},
//     {titulo: "Top Gun", genero: "Guerra"},
//     {titulo: "Your Name", genero: "Romance"},
//     {titulo: "Dead Pool", genero: "Heroi"},
//     {titulo: "Batman Forever", genero: "Heroi"}
// ]
// let contagemFilmes = []

// filmes.forEach((filme) => {
//     if(contagemFilmes[filme.genero]){
//         contagemFilmes[filme.genero]++
//     }
//     else{
//         contagemFilmes[filme.genero] = 1
//     }
// })

// let count = {};

// for(let filme of filmes){
//     if(count[filme.genero]){
//         count[filme.genero]++
//     }
//     else{
//         count[filme.genero] = 1
//     }
// }
// for(let genero in count){
//     console.log(`Tem ${count[genero]} filmes no gênero ${genero}`)
// }



// function calcularFatorial(n) {
//     let fatorial = 1
//     for(let i = 1 ; i <= n ; i++){
//         fatorial *= i
//     }
//     return fatorial
// }

// console.log(calcularFatorial(6))


// Imprimir os primeiros numeros de fibonnaci



// function imprimirFibonacci(n){
//     let n1 = 0
//     let n2 = 1
//     for (let i = 0; i < n; i++){
//         console.log(n1)
//         let proximo = n1 + n2
//         n1 = n2
//         n2 = proximo
//     }
// }

// console.log(imprimirFibonacci(10))

//Função de PA

// function progressaoAritmetica(primeirotermo,razao){
//     soma = 0
//     for(let i = 0 ; i < 10; i++){
//     let valor = primeirotermo + i * razao
//     console.log(valor)
//     soma += valor
//     }
// }

// console.log(progressaoAritmetica(3,5)) 

//Soma de 1 até N com recursividade

// function soma(n){
//     if(n === 0){
//         return 0
//     }
//     else{
//         return n + soma(n-1)
//     }
// }

// console.log(soma(2))

//Fibonaaci

// function sequenciaFibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     else {
//         return sequenciaFibonacci(n-1) + sequenciaFibonacci(n-2)
//     }
// }

// console.log(sequenciaFibonacci(10)); // Resultado: 5

let categoria = [
    {
        id: 1,
        nome:"Eletronicos",
        filhos: [
            {id:2, nome:"Celulares",filhos:[]},
            {id:3, nome:"Computadores",filhos:[
                {id:4, nome:"Tablets",filhos:[]},
            ]}
        ]
    },
    {
        id:5,
        nome:"Louças",
        filhos:[]
    }
]

function imprimirCategorias(lista, nivel = 0){
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0){
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}

imprimirCategorias(categoria)