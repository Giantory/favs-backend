const mongoose = require('mongoose')

const listFields = {
    name: { type: String},
};

const favref = {
    favs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fav'
    }]
}

const listSchema = mongoose.Schema(Object.assign(listFields, favref),{collection: "FavsList"})

module.exports ={
    ListModel:  mongoose.model('FavsList', listSchema),
    listFields,
    favref
}