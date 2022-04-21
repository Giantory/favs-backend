const mongoose = require('mongoose')
const { Schema } = mongoose;


const listSchema = new mongoose.Schema({
    name: { type: String},
    favs: {
        type: Schema.Types.ObjectId,
        ref: 'Favs'
    },
},
{
    collection: 'Lists'
});

module.exports = mongoose.model('List', listSchema);