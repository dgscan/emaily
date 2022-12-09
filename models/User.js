const mongoose = require ('mongoose');
const Schema = mongoose.Schema; // same with const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String
});

//create a new collection named users
//if exists not overrideş, (but gives warning ?)
mongoose.model('users', userSchema);