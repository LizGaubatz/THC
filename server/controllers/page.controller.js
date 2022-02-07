const {Page} = require("../models/page.model")


// SHOW ALL
module.exports.allPages = (req, res) =>{
    Page.find().sort({type: 1})
        .then(jobs => res.json(jobs))
        .catch(err=> res.status(400).json(err))
}

// SHOW ONE
module.exports.onePage = (req, res) =>{
    Page.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}

// CREATE
module.exports.addPage = (req, res) =>{
    Page.create(req.body)
        .then(newPage => res.json(newPage))
        .catch(err=> res.status(400).json(err))
}

// UPDATE
module.exports.updatePage = (req, res) =>{
    Page.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}


// DELETE
module.exports.deletePage = (req, res) =>{
    Page.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err=> res.status(400).json(err))
}
