let { livros, idLivro } = require('../bancodedados')

const consultarLivros = (req, res) => {
    res.json(livros)
}

const consultarLivro = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        res.status(400).send({ mensagem: 'O ID deve ser um número válido.' });
        return;
    }

    livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (livro) {
        return res.json(livro)
    } res.status(400).send({ mensagem: 'O ID do livro não existe.' });



}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    const livroNovo = livros.push({
        id: idLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    })

    res.json(livros[livros.length - 1])
}

const substituirLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    let livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

    return res.json({ mensagem: "Livro substituído." })
}



module.exports = {
    consultarLivros,
    consultarLivro,
    adicionarLivro,
    substituirLivro
}