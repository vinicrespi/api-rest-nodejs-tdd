const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (request, response) => {
	response.status(200).send();
});

app.get('/users', (request, response) => {
	const users = [
		{
			name: 'John Doe',
			mail: 'john@mail.com'
		},
	];
	response.status(200).json(users);
});

app.post('/users', (request, response) => {
	response.status(201).json(request.body);
})

module.exports = app;
