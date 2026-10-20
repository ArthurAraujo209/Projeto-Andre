const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    // Helper para formatar data de YYYY-MM-DD para DD/MM/YYYY
    formatarData: (dataString) => {
      if (!dataString) return '';
      const [ano, mes, dia] = dataString.split('-');
      return `${dia}/${mes}/${ano}`;
    }
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware próprio
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use('/', routes);

// 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página não encontrada' });
});

// Erro 500
app.use((erro, req, res, next) => {
  console.error('Erro no servidor:', erro);
  res.status(500).render('erro', { titulo: 'Erro Interno' });
});

module.exports = app;