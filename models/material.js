const db = require('./firebase');
const colecao = db.collection('materiais');

const Material = {
  // 1. Conta quantos registros existem (substitui o count())
  async count() {
    const snapshot = await colecao.get();
    return snapshot.size;
  },

  // 2. Insere dados iniciais (substitui o bulkCreate())
  async bulkCreate(registros) {
    const batch = db.batch();
    registros.forEach((registro, index) => {
      // Força o ID a ser "1", "2", "3" etc., para bater com os testes do professor
      const docRef = colecao.doc(String(index + 1)); 
      batch.set(docRef, registro);
    });
    await batch.commit();
  },

  // 3. Busca todos (substitui o findAll())
  async findAll(ordem = 'data') {
    const snapshot = await colecao.orderBy(ordem, 'desc').get();
    const materiais = [];
    snapshot.forEach(doc => {
      materiais.push({ id: doc.id, ...doc.data() });
    });
    return materiais;
  },

  // 4. Busca 3 destaques para a Home
  async findDestaques(limite = 3) {
    const snapshot = await colecao.limit(limite).get();
    const materiais = [];
    snapshot.forEach(doc => {
      materiais.push({ id: doc.id, ...doc.data() });
    });
    return materiais;
  },

  // 5. Busca por ID (substitui o findByPk())
  async findByPk(id) {
    const doc = await colecao.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  }
};

module.exports = Material;