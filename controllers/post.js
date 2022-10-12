const Post = require('../models/Post')

module.exports = {
  index,
  create,
  show,
  delete: deletePost,
  update
}

function index(req, res){
  console.log('Index - Post')
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

function show(req, res){
  Post.findById(req.params.id, function(err, post){
    res.json(post).status(200)
  })
}

function deletePost(req, res){
  console.log('Finding and trying to delete')
  Post.findByIdAndRemove(req.params.id).exec()
  res.json('Item Deleted')
}

function update(req, res){
  console.log(req.params.id)
  Post.findByIdAndUpdate(req.params.id).exec()
  res.json('Item Updated')
}