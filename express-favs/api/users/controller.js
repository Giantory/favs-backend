const { UserModel, userFields, listref } = require("./model");
const jwt = require("jsonwebtoken");

const referencesNames = Object.getOwnPropertyNames(listref);

exports.getAllUsers = (req, res) => {
    const populate = referencesNames.join(' ')
    UserModel.find().populate(populate)
        .exec()
        .then((response) => {
            res.status(200).json({ success: true, users: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.signinUser = async (req, res) => {
    const user = await UserUserModel.findOne({ email: req.body.email })
    try {
        if (!user) {
            return res.status(404).json({ success: false, message: "El usuario no existe" });
        }
        let isValid = await UserUserModel.comparePassword(
            req.body.password,
            user.password
        );
        if (!isValid) { return res.status(401).json({ token: null, message: "Email or Password are invalid" }); }
        const token = jwt.sign({ id: user._id }, "user", {
            expiresIn: 86400, //24hrs
        });
        res.json({ token , decoded: token.decoded});
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error: err });
    }

};
exports.signupUser = async (req, res) => {
    const body = req.body;
    const User = new UserModel(body);
    await User.save()
        .then((response) => {
            console.log(response);
            let token = jwt.sign({ id: response._id }, "user", {
                expiresIn: 86400, //24hrs
            });
            res.status(200).json({
                success: true,
                token: token,
                data: response,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.deleteAllUsers = (req, res) => {
    UserModel.deleteMany()
        .then((response) => {
            res.status(200).json({ success: true, message: "All users delete" });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    UserModel.findByIdAndUpdate(id, body, { new: true })
        .then((response) => {
            res
                .status(200)
                .json({ success: true, message: "User update", data: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, error: err });
        });
};