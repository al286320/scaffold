const moongose = require('mongoose');
const Schema = moongose.Schema;

var Person = new Schema({
	name: {type: String, require: true, minlenght: 3, maxlenght: 30},
	surname: {type: String, require: true, minlenght: 3, maxlenght: 30},
	email: {type: String, require: true, minlenght: 10, maxlenght: 70},
	phone: {type: String, require: true, minlenght: 9, maxlenght: 15},
	direction: {type: String, require: true, minlenght: 5, maxlenght: 30},
	cp: {type: 	String, require: true, minlenght: 3, maxlenght:6 },
	registerDate: {type: Date, default: Date.now()}
}, {collection: 'Person'}); // {collection: 'Person'} sirve para darle el nombre a la tabla

module.exports = moongose.model('Person', Person);