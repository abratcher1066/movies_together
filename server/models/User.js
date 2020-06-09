const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    avatar: String,
    username: String,
    password: String,
    movies: Array
});

const User = mongoose.model("User", UserSchema);

module.exports = User;