const sampleModel = require('../../libs/mongo').sampleModel;

class battelService {

    // find location 
    async list() {
        const data = await sampleModel.find({}, { 'location': 1, '_id': 0 });
		// some bussines logic
		return data;
    }

    // count 
    async count() {
        return await sampleModel.countDocuments();
    }

    // stats
    async stats() {
        const data = await sampleModel.find({});
        const most_active = {};
        const something = {};
        let newsomething = [];
        let moreOption = {};

		// some oprations

        return { most_active, something, newsomething, moreOption };
    }

    // search
    async search(params) {
        const { king, query } = params;
        const findQuery = {
            $and: [{
                $or: [{ 'attacker_king': king, 'defender_king': king },
                    query
                ]
            }]
        };
        return await sampleModel.find(findQuery);
    }



}

module.exports = new battelService();