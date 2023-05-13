const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: "JZD-0733",
        ano: "2023",
        modelo: "Civic",
        marca: "Honda"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        ano: "1999",
        modelo: "Kwid",
        marca: "Renault"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});





