const {Item} = require("../models/item.model")


// SHOW ALL
module.exports.allItems = (req, res) =>{
    Item.find().sort({type: 1})
        .then(jobs => res.json(jobs))
        .catch(err=> res.status(400).json(err))
}

// SHOW ONE
module.exports.oneItem = (req, res) =>{
    Item.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}

// CREATE
module.exports.addItem = (req, res) =>{
    Item.create(req.body)
        .then(newItem => res.json(newItem))
        .catch(err=> res.status(400).json(err))
}

// UPDATE
module.exports.updateItem = (req, res) =>{
    Item.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}


// DELETE
module.exports.deleteItem = (req, res) =>{
    Item.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err=> res.status(400).json(err))
}
