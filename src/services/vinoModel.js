const db = require('./db');

// SEE- RECOVER ALL REGISTERS
async function getAll() {
    const sql = 'SELECT * FROM tipos_vinos';
    return db.query(sql,[]);
}

// SEE - ONE REGISTER
async function getOne(id) {
    const sql = 'SELECT * FROM tipos_vinos WHERE id=?';
    return db.query(sql,[id]);
}


// ADD ONE ARTICLE
async function addOne(tipoVino) {
    //console.log('El tipo de vino ' + tipoVino);
    const sql = 'INSERT INTO tipos_vinos (tipo_vino) VALUES (?)'  ;
    return db.query(sql,[tipoVino]);  
}

// UPDATE ONE ARTICLE
async function updateOne(id, tipoVino) {
    const sql = 'UPDATE tipos_vinos SET tipo_vino=? WHERE id=?';
    return db.query(sql, [tipoVino, id]);
}


// DELETE ONE ARTICLE
async function deleteOne(id) {
    const sql = "DELETE FROM tipos_vinos WHERE id=?";
    return db.query(sql,[id]);
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    updateOne,
}

