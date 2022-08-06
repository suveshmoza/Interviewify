const notFoundMiddleware = (req, res) =>
	res.status(404).send('DOESNT NOT EXIST');

export default notFoundMiddleware;
