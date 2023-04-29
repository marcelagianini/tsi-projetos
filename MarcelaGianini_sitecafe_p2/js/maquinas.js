var imagemtd = document.getElementById("imagens")
var precotd = document.getElementById("preco")

function imagemLink(imagens, preco) {
	imagemtd.innerHTML = `<img src="${imagens}">`
	precotd.innerText = preco
}


