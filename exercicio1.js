const livros = {
    título: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    gênero: "Fantasia"
}

console.log(`
    Título: ${livros.título}
    Autor: ${livros.autor}
    Ano: ${livros.ano}
    Gênero: ${livros.gênero}`)

    //


    const anoAtual = new Date().getFullYear();
const idadeLivro = anoAtual - livros.ano;

console.log(`O livro "${livros.título}" tem ${idadeLivro} anos.`);

//


    livros.avaliacao = null;

    let avaliacao2 = {nota: 5, comentário: "Excelente livro!"};
    if (livros.avaliacao === null) {
        livros.avaliacao = avaliacao2;
    } else {
        console.log("O livro já foi avaliado.");
    }

livros.idade = idadeLivro;

livros.gênero = "Fantasia Épica";

console.log(`
    Detalhes do livro:
    Título: ${livros['título']}
    Autor: ${livros['autor']}
    Ano: ${livros['ano']}
    Gênero: ${livros['gênero']}
    Idade: ${livros['idade']}
    Avaliação: ${livros['avaliacao'] ? `Nota: ${livros['avaliacao'].nota}, Comentário: ${livros['avaliacao'].comentário}` : "Avaliação não disponível"}
    `)

delete livros.avaliacao;

console.log(livros);
    //



