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
  console.log(req.body)
  console.log(req.user._id)
  Post.create({
    name: req.body.name,
    description: req.body.description,
    level: req.body.level,
    location: req.body.location,
    price: req.body.price,
    date: req.body.date,
    user: req.user._id
  }, function(err, post){
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
  console.log(req.body)
  Post.findByIdAndUpdate(req.params.id, req.body).exec()
  res.json('Item Updated')
}