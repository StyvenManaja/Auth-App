const User = require('../models/user')

// Repository pour crée un nouvel utilisateur
const createUser = async (userData) => {
    try {
        return await User.create(userData)
    } catch (error) {
        throw new Error('MongoDB error')
    }
}

// Repository pour récuperer un utilisateur depuis la base de donnée
const findUserByMail = async (email) => {
    try {
        return await User.findOne({ email: email })
    } catch (error) {
        throw new Error('MongoDB error')
    }
}

module.exports = { createUser, findUserByMail }