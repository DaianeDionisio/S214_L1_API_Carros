const { CarroModel } = require('../infrastructure/database');

const CarroRepository = {
    async create(data) {
        try {
            const model = new CarroModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                placa: data.placa,
            };
            const options = { new: true };
            const filter = { placa: data.placa };
            const result = await CarroModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarroModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByYear(data) {
        try {
            const result = await CarroModel.findOne({ ano: data.ano }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarroModel.deleteOne({ placa: data.placa }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarroRepository;