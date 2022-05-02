const saida = document.querySelector('.saida')

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador)
      contador++
      digitacao(texto, contador)
    }, 150)
  }
}

digitacao('FRONT - END DEVELOPER', 0)
