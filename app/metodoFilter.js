const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn=> btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    let livrosFiltrados = livros.filter(livros => livros.categoria == elementoBtn.value)
    exibirLivros(livrosFiltrados)
}