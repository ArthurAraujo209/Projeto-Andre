const express = require('express');
const router = express.Router();
const Material = require('../models/material');

// Rota de Saúde (Obrigatória)
router.get('/saude', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Rota Inicial
router.get('/', async (req, res, next) => {
  try {
    const destaques = await Material.findDestaques(3);
    res.render('index', { titulo: 'Início', destaques });
  } catch (erro) {
    next(erro);
  }
});

// Rota de Listagem
router.get('/materiais', async (req, res, next) => {
  try {
    // Ordenação por data decrescente (justificativa: mostrar os mais recentes primeiro)
    const registros = await Material.findAll('data');
    res.render('entidades/listar', { titulo: 'Lista de Materiais', registros });
  } catch (erro) {
    next(erro);
  }
});

// Rota de Detalhamento com validação de ID
router.get('/materiais/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validação: se o ID for inválido (não numérico no nosso caso) ou menor/igual a zero
    if (id === 'abc' || Number(id) <= 0) {
      return res.status(404).render('404', { titulo: 'Erro 404' });
    }

    const registro = await Material.findByPk(id);
    
    if (!registro) {
      return res.status(404).render('404', { titulo: 'Erro 404' });
    }

    res.render('entidades/detalhar', { titulo: registro.titulo, registro });
  } catch (erro) {
    next(erro);
  }
});

// Rota Sobre (apenas para não ter links quebrados)
router.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Sobre' }); 
});

module.exports = router;