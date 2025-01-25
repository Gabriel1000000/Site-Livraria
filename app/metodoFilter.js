const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn=> btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria =='disponivel' ? filtrarPorDisponibilidade(): filtrarPorCategoria(elementoBtn)
    exibirLivros(livrosFiltrados)
    if(categoria=='disponivel'){
        const valorTotal = calcularValor(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotal(valorTotal)
    }
}

function filtrarPorCategoria(elementoBtn) {
    return livros.filter(livros => livros.categoria == elementoBtn.value)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livros => livros.quantidade > 0)
}

function exibirValorTotal(valor){
    elementoTotalValor.innerHTML=`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div> 
    `
}