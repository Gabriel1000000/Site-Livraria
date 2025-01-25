const elementoLivro = document.getElementById('livros')

function exibirLivros(listaLivros){
    elementoLivro.innerHTML=''
    listaLivros.forEach(livro => {
        elementoLivro.innerHTML+=`
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        ` 
    });
}

// <img class="livro__imagens indisponivel" src="${livro.imagem}"alt="${livro.alt}" />