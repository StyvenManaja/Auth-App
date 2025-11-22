const userService = require('../services/user.service')

// controller pour la création d'un nouvel utilisateur
const createUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await userService.createUser(username, email, password)
        if(!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'Failed to create user'
            })
        }

        res.status(201).json({
            status: 'success',
            data: {
                user: {
                    username: user.username,
                    email: user.email
                }
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Unexpected error on creating user:' + error.message
        })
    }
}

// Controller pour loggger un utilisateur
const logUserIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userService.findUserByMail(email)
        // Vérifier l'existence de l'utilisateur et la validité de la mdp
        if(user && await user.comparePassword(password)) {
            return res.status(200).json({
                status: 'success',
                data: {
                    user: {
                        username: user.username,
                        email: user.email
                    }
                }
            })
        }

        // Si l'utilisateur n'est pas trouver ou mdp incorrecte
        res.status(400).json({
            status: 'fail',
            message: 'Invalid credential.'
        })

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Unexpected error on creating user:' + error.message
        })
    }
}

module.exports = { createUser, logUserIn }