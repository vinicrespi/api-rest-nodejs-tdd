const request = require('supertest');
const { faker }  = require('@faker-js/faker');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
	return request(app).get('/users')
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body.length).toBeGreaterThan(0);
		});
});

test('Deve inserir usuário com sucesso', () => {
	const mail = faker.internet.email();
	return request(app).post('/users')
		.send({ name: 'Walter Mitty', mail, passwd: '123456' })
		.then((response) => {
			expect(response.status).toBe(201);
			expect(response.body.name).toBe('Walter Mitty');
		});
});