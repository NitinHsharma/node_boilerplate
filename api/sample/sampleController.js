var sampleService = require('./sampleService');


const list = async (req, res) => {
	try {
		const data = await sampleService.list();
		return res.send(data);

	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}

const count = async (req, res) => {
	try {
		const count = await sampleService.count();
		return res.send(count.toString());

	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}


const stats = async (req, res) => {
	try {
		const data = await sampleService.stats();
		return res.send(data);

	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}


const search = async (req, res) => {
	try {

		const requestQuery = req.query;
		const data = await sampleService.search({ query: requestQuery });
		return res.send(data);

	} catch (err) {
		res.statusCode = 500;
		return res.send(err);
	}
}




module.exports = {
	list,
	count,
	stats,
	search
}