const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");

const userFields= {
    email: { type: String},
    password: { type: String}, 
};

const listref = {
    favslists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FavsList"
    }]
}

const userSchema = mongoose.Schema(Object.assign(userFields, listref),{collection: "User"})

userSchema.statics.encryptPassword = async (password) => {
    const value = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, value);
  };
  
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}
userSchema.pre('save', async function save(next) {
    if (this.isNew) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
module.exports = {
    UserModel: mongoose.model("User", userSchema),
    userFields,
    listref
}