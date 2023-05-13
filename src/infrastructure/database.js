const mongoose = require('mongoose');

const uri = `mongodb+srv://daianelimadionisio:VPghnNrHuMBXQTD9@cluster0.xowoayk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarroSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    placa: {
        type: String,
        unique: true,
    },
    modelo: String,
    marca: String,
    ano: String,
});

const CarroModel = mongoose.model('UserModel', CarroSchema);

module.exports = {
    CarroModel,
};

mongoose.connection.close();