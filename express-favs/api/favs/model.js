const mongoose = require('mongoose')

const favSchema = new mongoose.Schema({
    
    tittle: { type: String},
    description: { type: String},
    link: { type: String}
},
{
    collection: 'Fav'
});

module.exports = mongoose.model('Fav', favSchema);