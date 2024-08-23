const db = require('../config/db')

//funçao para criar usuario
const createUser = (name, email, callback) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)'
    db.query(sql, [name, email], callback)
}

//funçao para buscar todos os usuarios
const getAllUsers = (callback) => {
    const sql = 'SELECT * FROM users'
    db.query(sql, callback)
}

const deleteUser = (id, callback) => {
    const sql = 'DELETE FROM users WHERE idusers = ?';
    db.query(sql, [id], callback)
}

const updateUser = (id, name, email, callback) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE idusers = ?';
    db.query(sql, [name, email, id], callback);
}


module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
}