const express = require ('express');
const routes = require('./routes/vinoRouter.js');
const server = express();


server.use(express.json());
server.use('/catalogo', routes);


server.listen (4000,() => {
    console.log ('Port 4000 activated')
})



