module.exports = (app) => {
	const findAll = (request, response) => {
			app.services.user.findAll()
				.then(result => response.status(200).json(result));
	};
		const create = async (request, response) => {
			const result = await app.services.user.save(request.body);
			response.status(201).json(result[0]);
	};

	return { findAll, create };
}