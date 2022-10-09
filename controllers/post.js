const Post = require('../models/Post')

module.exports = {
  index,
  create
}

async function index(req, res){
  Post.find({}, function(err, posts){
    if(err){
      res.status(500).json(err)
    }
    res.json(posts).status(200)
  })
}

async function create(req, res){
  Post.create(req.body, function(err, post){
    res.status(200).json('ok')
  })
}