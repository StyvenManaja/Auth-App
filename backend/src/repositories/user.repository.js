const User = require('../models/user')

// Repository pour crée un nouvel utilisateur
const createUser = async (userData) => {
    try {
        return await User.create(userData)
    } catch (error) {
        throw new Error('MongoDB error: ' + error.message)
    }
}

module.exports = { createUser }