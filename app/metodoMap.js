function aplicandoDesconto(livros){
    const desconto = 0.3
    let livroDesconto = livros.map(livros => {
        // Os "..." NO JavaScript é um operadpr do js que faz uma copia do meu objeto para outro objeto 
        return {...livros, preco: livros.preco - (livros.preco*desconto   )}
    })

    return livroDesconto

}