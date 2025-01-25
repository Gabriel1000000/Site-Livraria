let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarLivosValor)

function ordenarLivosValor(){
    let ordenados = livros.sort((a,b)=>a.preco-b.preco) 
    exibirLivros(ordenados)
}


