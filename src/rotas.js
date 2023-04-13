const express = require('express')
const rotas = express()
const { consultarLivros, consultarLivro, adicionarLivro, substituirLivro } = require('./controladores/livros')

rotas.get('/livros', consultarLivros)
rotas.get('/livros/:id', consultarLivro)
rotas.post('/livros/', adicionarLivro)
rotas.put('/livros/:id', substituirLivro)

module.exports = rotas