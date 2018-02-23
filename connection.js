//Librerias
const mongoose = require('mongoose');
const bluebird = require('bluebird');

//Asociamos mongoose con la libreria bluebird para poder hacer promesas
mongoose.Promise = bluebird;

//Ruta de la base de datos
const dbURI = 'mongodb://localhost:27017/scaffold';

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

//Conexion a la base de datoas
mongoose.connect(dbURI, options).then(
	() => {console.log('Conectado correctamente');},
	err => {console.log('Error' + err);} 
	);

/*
//TEST
var Person = require('./src/model/personaModel.js');

new Person({
	name: 'Pablo',
	surname: 'Oliver',
	email: 'al286320@uji.es',
	phone: '+34627097296',
	direction:'C/ Cervantes 23',
	cp: 12520
}).save((err,data) => {
	if(err){
		console.log('Error' + err);
	}else{
		console.log('Persona:' + data);
	}
});*/