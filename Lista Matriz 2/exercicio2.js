function gerarMatriz() {
    let matriz = []
    
    for (let i = 0; i < 5; i++) {
      matriz[i] = []
      for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1
      }
    }
    return matriz
  }
  
  function somarImpares(matriz) {
    let somaImpares = 0
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (matriz[i][j] % 2 !== 0) {
          somaImpares += matriz[i][j]
        }
      }
    }
    
    return somaImpares
  }
  
  function somarColunas(matriz) {
    let somaColunas = Array(5).fill(0)
    
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        somaColunas[j] += matriz[i][j]
      }
    }
    
    return somaColunas
  }
  
  function somarLinhas(matriz) {
    let somaLinhas = []
    
    for (let i = 0; i < 5; i++) {
      let somaLinha = 0
      for (let j = 0; j < 5; j++) {
        somaLinha += matriz[i][j]
      }
      somaLinhas.push(somaLinha)
    }
    
    return somaLinhas
  }
  
 
  var matriz = gerarMatriz()
  console.log("Soma dos números ímpares: " + somarImpares(matriz))
  console.log("Soma de cada coluna:" + somarColunas(matriz))
  console.log("Soma de cada linha:" + somarLinhas(matriz))
  