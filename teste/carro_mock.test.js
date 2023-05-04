const { CarroModel } = require('../src/infrastructure/database');
const carro = require('../src/port/carro_repository');

describe('create', () => {
    it('Valid Carro', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                placa: "NER-1043",
                ano: "2015",
                modelo: "Gol",
                marca: "Volkswagen"
            }),
        }));

        expect(await carro.create({
            id: 1,
            placa: "NER-1043",
            ano: "2015",
            modelo: "Gol",
            marca: "Volkswagen"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa: expect.any(String),
                ano: expect.any(String),
                modelo: expect.any(String),
                marca: expect.any(String)
            }),
        );
    });
});

describe('editCarro', () => {
    it('Valid edit', async () => {
        CarroModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    placa: "LMV-6479",
                    ano: "2018",
                    modelo: "Palio",
                    marca: "Fiat"
                }),
            }),
        }));

        expect(await carro.update({
            placa: 'LMV-6479',
            ano: '2018',
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa: expect.any(String),
                ano: expect.any(String),
                modelo: expect.any(String),
                marca: expect.any(String)
            }),
        );
    });
});

describe('listCarros', () => {
    it('Valid list', async () => {
        CarroModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                placa: 'MZI-0988',
                ano: '2010',
                modelo: 'Ka',
                marca: 'Ford'
            }),
        }));

        expect(await carro.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa: 'MZI-0988',
                ano: '2010',
                modelo: 'Ka',
                marca: 'Ford'
            }),
        );

    });
});

describe('getByYear', () => {
    it('Valid list', async () => {
        CarroModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                ano: '2005',
                placa: 'MDM-7885',
                marca: 'Renault',
                modelo: 'Sandero'
            }),
        }));

        expect(await carro.getByYear({
            ano: '2005'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ano: '2005',
                placa: 'MDM-7885',
                marca: 'Renault',
                modelo: 'Sandero'
            }),
        );

    });
});

describe('deleteCarro', () => {
    it('Valid delete', async () => {
        CarroModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await carro.delete({
            placa: 'MDM-7885',
        })).toEqual(1);
    });
});