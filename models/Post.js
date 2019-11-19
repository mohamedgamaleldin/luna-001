// /models/Post.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    user:   String,
    text:   String,
})

mongoose.model('posts', postSchema)