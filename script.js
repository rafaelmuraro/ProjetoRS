function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //essa parte substitui tudo que está abaixo

  //  if(html.classList.contains('light')){/*se essa condição for verdadeira, ele entra no código abaixo*/
  //  html.classList.remove('light')
  //} else {
  //html.classList.add('light')
  //}

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/barkon-light-final.png")
    //img.setAttribute("src", "./assets/barkon-light.png")
    img.setAttribute(
      "alt",
      "Foto da Marca Barkon, onde há a imagem de um cachorro com uma guia na cor laranja"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/barkon-dark-final.png")
    img.setAttribute("alt", "Teste")
    //img.setAttribute("src", "./assets/barkon-dark2.png")
  }
}
