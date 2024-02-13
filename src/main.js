const express = require ('express');
const server = express ();
server.use(express.json());

const mysql = require ('mysql2');
const dotenv = require ("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.HOST,
    database:process.env.DATABASE ,
    user: process.env.USER ,
    password:process.env.PASSWORD
});

connection.connect ((error) => {
    if (error) {
        console.log(error.mesage);
        throw error;
    } else {
        console.log ('Conection OK');
    }
})
server.get ('/', (req, res) => {
    res.send ('Pàgina principal');

})
server.listen (4000,() => {
    console.log ('Port 4000 activated')
})

// SEE- RECOVER ALL REGISTERS
server.get ('/tipos', (req, res) => {
    const sql = 'SELECT * FROM tipos_vinos';
    connection.query (sql, [], (error, result, fields) => {
        if(error) {
            console.log(error.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
})

// SEE ONE ARTICLE -- RECOVER ONE ARTICLE
server.get ('/tipos/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const sql = 'SELECT * FROM tipos_vinos WHERE id=?';
    connection.query (sql, [id], (error, result, fields) => {
        if(error) {
            console.log(error.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
})
// ADD ONE ARTICLE
server.post ('/tipos', (req, res) => {
    // Desestructurar el objeto
    const {tipo_vino}= req.body;
    const sql = 'INSERT INTO tipos_vinos (tipo_vino) VALUES (?)';
    connection.query (sql, [tipo_vino], (error, result, fields) => {
        if(error) {
            console.log(error.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
})
//MODIFY ONE ARTICLE
server.put ('/tipos/:id', (req, res) => {
    // Desestructurar el objeto
    const {tipo_vino} = req.body;
    const id = parseInt(req.params.id);
    const sql = 'UPDATE tipos_vinos SET tipo_vino=? WHERE id=?';
    connection.query (sql, [tipo_vino,id], (error, result, fields) => {
        if(error) {
            console.log(error.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
})

//DELETE ONE ARTICLE
server.delete ('/tipos/:id', (req, res) => {
    // Desestructurar el objeto
    const {tipo_vino}= req.body;
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM tipos_vinos WHERE id=?';
    connection.query (sql, [id], (error, result, fields) => {
        if(error) {
            console.log(error.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
})
