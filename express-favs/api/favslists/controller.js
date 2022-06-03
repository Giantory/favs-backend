const { ListModel, listFields, favref } = require("./model");
const { UserModel} = require("../users/model");
const referencesNames = Object.getOwnPropertyNames(favref);

exports.getAllLists = (req, res) => {
    const populate = referencesNames.join('')
    ListModel.find().populate(populate)
        .exec()
        .then((response) => {
            res.status(200).json({ success: true, lists: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.getListById = async (req, res) => {
    const id = req.params.id;
    const List = ListModel.findById(id)
    await List.exec()
        .then((response) => {
            if (!List) {
                const message = `${ListModel.modelName} not found`;
                res.status(404).json({ success: true, message: message, data: response })
            } else {
                res.status(200).json({ success: true, data: response })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.newList = async (req, res, next) => {
    const body = req.body;
    const FavList = new ListModel(body);
    const User = await UserModel.findById(req.decoded.id)
    await FavList.save()
        .then((response) => {
            if (!User) {
                const message = `User not exist`;
                next({
                    message,
                    statusCode: 404,
                });
            } else {
                let list = [...User.favslists]
                list.push(response._id);
                UserModel.findByIdAndUpdate(User._id, { $set: { favslists: list } }).exec();
                res.status(200).json(
                    {
                        success: true,
                        message: `Congrat ${User.email}, you have created a list of favs`,
                        lists: response
                    });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.deleteListById = (req, res) => {
    const id = req.params.id;
    ListModel.findByIdAndDelete(id)
        .then((response) => {
            res
                .status(200)
                .json({ success: true, message: "List deleted", data: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
