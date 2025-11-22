const userRepository = require('../repositories/user.repository')

// Service pour crée un nouvel utilisateur
const createUser = async (username, email, password) => {
    try {
        return await userRepository.createUser({ username, email, password })
    } catch (error) {
        throw new Error('Unexpected error on creating user')
    }
}

// Service pour récuperer un utilisateur et de comparer le mdp
const findUserByMail = async (email) => {
    try {
        return await userRepository.findUserByMail(email)
    } catch (error) {
        throw new Error('Unexpected error on creating user')
    }
}

module.exports = { createUser, findUserByMail }