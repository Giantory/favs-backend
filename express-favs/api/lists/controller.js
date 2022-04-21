const ListModel = require("./model");

exports.getAllLists = (req, res) => {
    ListModel.find().exec()
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
    const List=ListModel.findById(id)
    await List.exec()
        .then((response) =>{
            if (!List) {
                const message = `${ListModel.modelName} not found`;
                res.status(404).json({ success: true, message: message, data: response })
            }else{
            res.status(200).json({ success: true, message: 'Course has been found', data: response })
            }  
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.newList = async (req, res) => {
    const body = req.body;
    const List = new ListModel(body);
    await List.save()
        .then((response) => {
            res.status(200).json({ success: true, lists: response });
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
exports.deleteAllLists = (req, res) => {
    ListModel.deleteMany()
        .then((response) => {
            res.status(200).json({ success: true, message: "All lists deleted" });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
