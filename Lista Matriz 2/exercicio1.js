function calcular(matriz) {
    let alunos = matriz.length
    let disciplinas = matriz[0].length
    
    let medias = []
    
    for (let i = 0; i < alunos; i++) {
      let somaNotas = 0
      for (let j = 0; j < disciplinas; j++) {
        somaNotas += matriz[i][j]
      }
      
      let media = somaNotas / disciplinas
      medias.push(media)
    }
    
    return medias
  }
  var notas = [
    [8, 7, 9],
    [6, 5, 7],
    [9, 8, 7]
  ]
  
  var mediasAlunos = calcular(notas)
  console.table(mediasAlunos)
    