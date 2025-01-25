let livros = []
const apiLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getLivrosApi()

async function getLivrosApi(){
    const res = await fetch(apiLivros)
    livros = await res.json()
    console.table(livros)
    console.log(livros)
    let livroDesconto = aplicandoDesconto(livros)
    exibirLivros(livroDesconto)
}

