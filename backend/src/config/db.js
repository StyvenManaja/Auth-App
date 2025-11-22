const mongoose = require('mongoose')

// Connexion à la base de données MongoDB avec l'URL stockée dans les variables d'environnement
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Récupération de la connexion active
const db = mongoose.connection

// Gestion des erreurs de connexion
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Confirmation de la connexion réussie
db.once('open', () => {
    console.log('Connected to MongoDB database.')
});

// Export de la connexion pour une utilisation ailleurs dans l'application
module.exports = db