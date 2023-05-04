const Carro = require('../application/carro_service');
const Utils = require('../utils/utils');

const route = '/carro';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Carro.create(req.body);
        res.status(Utils.responseStatus(response.placa));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Carro.update(req.body);
        res.status(Utils.responseStatus(response.placa));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Carro.list();
        res.status(Utils.responseStatus(response.placa));
        res.json(response);
    });
    app.patch(`${route}/listCarro`, async (req, res) => {
        const response = await Carro.listByYear(req.body);
        res.status(Utils.responseStatus(response.placa));
        res.json(response);
    });
    app.delete(`${route}/delete/:placa`, async (req, res) => {
        const data = req.body;
        const { placa } = req.params;
        data.placa = placa;
        const response = await Carro.delete(data);
        res.status(Utils.responseStatus(response.placa));
        res.json(response);
    });
};