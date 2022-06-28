module.exports = {
	test: {
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			port: 5435,
			user: 'postgres',
			password: 'postgres',
			database: 'tdd_db'
		},
		migrations: {
			directory: 'src/migrations',
		},
	},
};
