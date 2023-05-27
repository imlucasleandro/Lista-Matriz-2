function gerarMatriz() {
    var matriz = []
  
    for (let i = 0; i < 3; i++) {
      matriz[i] = []
      for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1
      }
    }
    return matriz
  }
  
  function separador(matriz) {
    let par = 0
    let impares = 0
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0) {
         par++
        } else {
          impares++
        }
      }
    }
  
    return {
      pares: par,
      impares: impares,
    };
  }

  var matriz = gerarMatriz()
  var resultado = separador(matriz)
  
  console.log("Quantidade de números pares: " + resultado.pares)
  console.log("Quantidade de números ímpares: " + resultado.impares)
  