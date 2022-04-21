const FavModel = require("./model");

exports.getAllFavs = (req, res) => {
    FavModel.find().exec()
        .then((response) => {
            res.status(200).json({ success: true, favs: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.newFav = async (req, res) => {
    const body = req.body;
    const Fav = new FavModel(body);
    await Fav.save()
        .then((response) => {
            res.status(200).json({ success: true, fav: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.deleteFavById = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    FavModel.findByIdAndDelete(id)
      .then((response) => {
        res
          .status(200)
          .json({ success: true, message: "Fav deleted", data: response });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ success: false, error: err });
      });
  };
exports.deleteAllFavs = (req, res) => {
    FavModel.deleteMany()
        .then((response) => {
            res.status(200).json({ success: true, message: "All favs deleted" });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};