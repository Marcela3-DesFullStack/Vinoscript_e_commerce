const express = require ('express');
const router = express.Router()

const tiposVinos = require('../services/tiposvino.js');

router.get('/', async(req, resp)=>{
    resp.json(await tiposVinos.getAll());
})

router.get('/:id', async(req, resp) => {
    const id = parseInt (req.params.id);
    resp.json(await tiposVinos.getOne(id));
})

router.post('/', async(req, resp)=>{
    const {tipo_vino} = req.body
    resp.json(await tiposVinos.addOne(tipo_vino));
})


router.put('/:id', async(req, resp) => {
    const {tipo_vino} = req.body;
    const id = parseInt (req.params.id);
    resp.json(await tiposVinos.updateOne(id,tipo_vino));
})

router.delete('/:id', async(req, resp) => {
    const id = parseInt (req.params.id);
    resp.json(await tiposVinos.deleteOne(id));
})

module.exports = router;