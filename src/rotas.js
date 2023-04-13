const express = require('express')
const rotas = express()
const { consultarLivros, consultarLivro, adicionarLivro, substituirLivro, alterarLivro, deletarLivro } = require('./controladores/livros')

rotas.get('/livros', consultarLivros)
rotas.get('/livros/:id', consultarLivro)
rotas.post('/livros/', adicionarLivro)
rotas.put('/livros/:id', substituirLivro)
rotas.patch('/livros/:id', alterarLivro)
rotas.delete('/livros/:id', deletarLivro)

module.exports = rotas