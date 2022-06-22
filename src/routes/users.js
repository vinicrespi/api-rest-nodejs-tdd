module.exports = () => {
	const findAll = (request, response) => {
			const users = [
				{
					name: 'John Doe',
					mail: 'john@mail.com'
				},
			];
			response.status(200).json(users);
	};
		const create = (request, response) => {
			response.status(201).json(request.body);
	};

	return { findAll, create };
}