const { json } = require('express');
const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must be at least 3 characters!"],
    }},
{timestamps: true});

// const Page = mongoose.model("Page", PageSchema)
// module.exports = Page
module.exports.Page = mongoose.model('Page', PageSchema)
