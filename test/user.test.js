const request = require('supertest');
const { faker }  = require('@faker-js/faker');

const app = require('../src/app');
const mail = faker.internet.email();

test('Deve listar todos os usuários', () => {
	return request(app).get('/users')
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body.length).toBeGreaterThan(0);
		});
});

test('Deve inserir usuário com sucesso', () => {
	return request(app).post('/users')
		.send({ name: 'Walter Mitty', mail, passwd: '123456' })
		.then((response) => {
			expect(response.status).toBe(201);
			expect(response.body.name).toBe('Walter Mitty');
		});
});

test('Não deve inserir usuário sem nome', () => {
	return request(app).post('/users')
		.send({ mail: faker.internet.email(), passwd: '123456' })
		.then((response) => {
			expect(response.status).toBe(400);
			expect(response.body.error).toBe('Nome é um atributo obrigatório');
		});
});

test('Não deve inserir usuário sem email', async () => {
	const result = await request(app).post('/users')
		.send({ name: faker.name.firstName(), passwd: '123456' });
	expect(result.status).toBe(400);
	expect(result.body.error).toBe('Email é um atributo obrigatório');
});

test('Não deve inserir usuário sem senha', (done) => {
	request(app).post('/users')
		.send({ name: faker.name.firstName(), mail: faker.internet.email() })
		.then((response) => {
			expect(response.status).toBe(400);
			expect(response.body.error).toBe('Senha é um atributo obrigatório');
			done();
		})
		.catch(error => done.fail(error));
});

test('Não deve inserir usuário com email existente', () => {
	return request(app).post('/users')
		.send({ name: 'Walter Mitty', mail, passwd: '123456' })
		.then((response) => {
			expect(response.status).toBe(400);
			expect(response.body.error).toBe('Já existe um usuário com esse email');
		});

});