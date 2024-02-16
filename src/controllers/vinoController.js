const { getAll, getOne, addOne, updateOne, deleteOne } = require ("../models/vinoModel.js")


const vinoController = { 
    
    getAll : async (req, res) => {
        try {
        const result = await getAll();
        res.json(result)

    } catch (error) {
        console.log (error)

    }},

    getOne : async (req, res) => {
        try {
            const id = parseInt (req.params.id);
            const result = await getOne(id);
            res.json(result)
        } catch (error) {
            console.log (error)
        
        }},

    addOne : async (req, res) => {
        try {
            const {tipo_vino} = req.body;
            const result = await addOne(tipo_vino);
            res.json (result)
   
        } catch (error) {
            console.log(error)
        }},

    updateOne : async (req, res) => {
        try {
            const {tipo_vino} = req.body;
            const id = parseInt (req.params.id);
            const result = await updateOne(id, tipo_vino);
            res.json (result)
   
        } catch (error) {
            console.log(error)
        }},

    deleteOne: async (req, res) => {
        try {
            const id = parseInt (req.params.id);
            const result = await deleteOne(id);
            res.json (result)

        } catch (error) {
            console.log(error)
        }},

    userLogin : async (req, res) => {
        try { 
            const { userName, password, userRole } = req.body;
            if (userName === 'Alfredo' && password === '0512') {
             res.json({ message: 'Bienvenido al entorno ' + userRole + ', ' +userName});
                } else {
                    res.json({ message: 'Bienvenido ' + userName + ', esperamos que disfrutes tu compra.' });
                }

        } catch (error) {
            console.log(error)
    }}                        
            

}

module.exports = {vinoController}
