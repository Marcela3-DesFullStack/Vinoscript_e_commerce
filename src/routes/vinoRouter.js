const express = require ('express');
const router = express.Router();
const catalogos = require('../models/vinoModel.js');
const {vinoController} = require ("../controllers/vinoController.js")



router.get('/', vinoController.getAll)

router.get('/:id', vinoController.getOne)

router.post('/', vinoController.addOne)

router.put('/:id', vinoController.updateOne)

router.delete('/:id', vinoController.deleteOne)

router.post('/login', vinoController.userLogin)


module.exports = router;