const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: { type: String},
    password: { type: String},
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lists"
    }
},
{
    collection: 'User'
});
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
module.exports = mongoose.model('User', userSchema);