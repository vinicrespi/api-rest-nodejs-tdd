const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
	return request(app).get('/users')
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body).toHaveLength(1);
			expect(response.body[0]).toHaveProperty('name', 'John Doe');
		});
});

test('Deve inserir usuário com sucesso', () => {
	return request(app).post('/users')
		.send({ name: 'Walter Mitty', mail: 'walter@mail.com'})
		.then((response) => {
			expect(response.status).toBe(201);
			expect(response.body.name).toBe('Walter Mitty');
		});
});