const FavModel = require("./model");
const {ListModel} = require("../favslists/model")
exports.newFav = async (req, res, next) => {
    const body = req.body;
    const Fav = new FavModel(body);
    const List = await ListModel.findById(req.params.id)
    await Fav.save()
        .then((response) => {
            if(!List){
                const message = `List not exist`;
                next({
                    message,
                    statusCode: 404,
                });
            } else{
                let list = [...List.favs]
                list.push(response._id)
                ListModel.findByIdAndUpdate(List._id,{$set: {favs: list}}).exec();
                res.status(200).json({
                    success: true, 
                    message:`Has agregado un favorito a la lista de ${List.name}`,
                    fav: response });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
