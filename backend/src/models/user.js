const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 6,
        unique: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Email is invalid"]
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
})

// Hasher le pwd à chaque enregistrement d'un nouveau pwd ou après un modif
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// method pour comparer le pwd
userSchema.methods.comparePassword = async function (enterdPassword) {
    return await bcrypt.compare(enterdPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)