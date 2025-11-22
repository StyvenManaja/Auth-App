const userRepository = require('../repositories/user.repository')

// Service pour crée un nouvel utilisateur
const createUser = async (username, email, password) => {
    try {
        return await userRepository.createUser({ username, email, password })
    } catch (error) {
        throw new Error('Unexpected error on creating user: ' + error.message)
    }
}

module.exports = { createUser }