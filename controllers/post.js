const Post = require('../models/Post')

module.exports = {
  index,
  create
}

function index(req, res){
  console.log('Index')
  Post.find({}, function(err, posts){
    if(err){
      res.status(500).json(err)
    }
    res.json(posts).status(200)
  })
}

function create(req, res){
  console.log('Creating')
  Post.create(req.body, function(err, post){
    res.status(200).json('ok')
  })
}