const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

test('GET / deve retornar status 200 e o título', async () => {
  const res = await request(app).get('/');
  assert.strictEqual(res.status, 200);
  assert.match(res.text, /Painel de materiais/);
});

test('GET /saude deve retornar JSON ok', async () => {
  const res = await request(app).get('/saude');
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(res.body, { status: 'ok' });
});

test('GET /materiais deve retornar status 200 e conter um registro inicial', async () => {
  const res = await request(app).get('/materiais');
  assert.strictEqual(res.status, 200);
  assert.match(res.text, /Guia de JavaScript/);
});

test('GET /materiais/1 deve abrir um registro existente', async () => {
  const res = await request(app).get('/materiais/1');
  assert.strictEqual(res.status, 200);
});

test('GET /materiais/99999 deve retornar 404', async () => {
  const res = await request(app).get('/materiais/99999');
  assert.strictEqual(res.status, 404);
  assert.match(res.text, /Material indisponível/);
});

test('GET /materiais/abc deve retornar 404', async () => {
  const res = await request(app).get('/materiais/abc');
  assert.strictEqual(res.status, 404);
});

test('Rota inexistente deve retornar 404', async () => {
  const res = await request(app).get('/rota-inexistente');
  assert.strictEqual(res.status, 404);
  assert.match(res.text, /Material indisponível/);
});