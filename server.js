const app = require('./app');
const Material = require('./models/material');

const PORT = process.env.PORT || 3000;

async function iniciar() {
  try {
    const quantidade = await Material.count();
    
    if (quantidade === 0) {
      await Material.bulkCreate([
        {
          titulo: "Guia de JavaScript",
          disciplina: "Programação para Internet",
          tipo: "Guia",
          data: "2023-10-15",
          descricao: "Um guia completo abordando desde variáveis e tipos de dados até funções e assincronismo em JavaScript."
        },
        {
          titulo: "Resumo de redes",
          disciplina: "Redes de Computadores",
          tipo: "Resumo",
          data: "2023-10-20",
          descricao: "Resumo dos principais conceitos de redes, incluindo modelo OSI, TCP/IP e endereçamento IP."
        },
        {
          titulo: "Lista de exercícios",
          disciplina: "Estrutura de Dados",
          tipo: "Lista",
          data: "2023-11-05",
          descricao: "Lista contendo 10 exercícios práticos sobre listas encadeadas, pilhas e filas."
        },
        {
          titulo: "Apresentação de HTTP",
          disciplina: "Programação para Internet",
          tipo: "Apresentação",
          data: "2023-11-12",
          descricao: "Slides explicando o protocolo HTTP, métodos (GET, POST), status codes e cabeçalhos."
        },
        {
          titulo: "Roteiro de Node.js",
          disciplina: "Programação para Internet",
          tipo: "Guia",
          data: "2023-11-25",
          descricao: "Roteiro passo a passo para criar um servidor básico utilizando Node.js e Express."
        },
        {
          titulo: "Revisão de banco de dados",
          disciplina: "Banco de Dados",
          tipo: "Resumo",
          data: "2023-12-01",
          descricao: "Revisão geral sobre modelagem relacional, chaves primárias e estrangeiras, e comandos SQL básicos."
        }
      ]);
      console.log('✅ Firebase populado com os 6 materiais iniciais!');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error('❌ Erro ao iniciar:', erro);
  }
}

iniciar();