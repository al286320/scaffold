const express = require('express');
const router  = express.Router();

const PersonaController = ('../src/controller/personaController.js');

//Save a nwe Person
router.route('/save').post(PersonaController.savePerson);

//Find all people
router.route('/all').get(PersonaController.findAllPersona);

module.exports = router;