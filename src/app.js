const app = require('express')();

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

module.exports = app;
