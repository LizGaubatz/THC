const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [3, "Type must be at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Must enter a valid price"],
        min: [0, "Price must be a positive integer"]
    }
}, {timestamps: true});

// const Item = mongoose.model("Item", ItemSchema)
// module.exports = Item
module.exports.Item = mongoose.model('Item', ItemSchema)