//preciso copiar todo o código e criar uma branch nova
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

//Utilizar Laço para ler o Array de Filmes
// for (let i = 0; i<filmes.length;i++){
//   console.log(`Filme ${i+1}: ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
//   console.log(`Estrelando:`)
//   for(let x = 0;x<filmes[i].elenco.length;x++){
//     console.log(filmes[i].elenco})
//   }
// }

for (let i in filmes){
  console.log(`\nFilme ${i+1}: ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  console.log(`Estrelando:`)
  for(let x of filmes[i].elenco){
    console.log(x)
  }
}

// const resultadosMegaSena = [
//   [6, 10, 23, 89, 12, 34],
//   [81, 12, 32, 65, 86, 4],
//   [10, 54, 8, 12, 58, 23],
//   [9, 3, 6, 10, 40, 50]
// ]
// console.log(resultadosMegaSena.length)

// for (let i = 0; i<resultadosMegaSena.length; i++){
//   if(resultadosMegaSena[i].length !== 6){
//     alert(`Número errado de bolinhas sorteadas. ${resultadosMegaSena[i].length} bolinhas, deveria ser 6`)
//   }
//   console.log(`Sorteio ${i+1}: ${resultadosMegaSena[i]}`)
// }

// const resultadoMegaSena = [
//   [1, 4, 3, 9, 7, 10],
//   [12, 5, 31, 22, 29, 40],
//   [33, 21, 43, 55, 2, 0],

// ]

// const resultadosMegaSena = [
//   [6, 10, 23, 89, 12, 34],//0
//   [81, 12, 32, 65, 86, 4],//1
//   [10, 54, 8, 12, 58, 23],//2
//   [9, 3, 6, 10, 40, 50] //3
// ]

// for (let i= 0; i< resultadosMegaSena.length; i++){
//   console.log(`Sorteio ${i+1}:`)
//   for(let indice = 0; indice < resultadosMegaSena[i].length; indice++){
//     const sorteio = resultadosMegaSena[i] // variavel pra pegar cada sorteio
//     // console.log(sorteio[indice])
//     console.log(resultadosMegaSena[i][indice])
//   }
// }

// Altere o laço externo do programa anterior para que ele seja um for… in (olha o indice)
// Altere o laço interno do programa anterior para que ele seja um for… of (olha o elemento)
// for (let i in resultadosMegaSena) {
//   console.log(`Sorteio ${Number(i+1)}:`)
//   for(let numero of resultadosMegaSena[i]){
//     console.log(numero)
//   }
// }