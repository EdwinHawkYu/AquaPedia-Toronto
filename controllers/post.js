const Post = require('../models/Post')

module.exports = {
  index,
  create,
  delete: deletePost,
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

function deletePost(req, res){
  try{
    let post = Post.findById({_id:req.params.id})
    post.remove()
    post.save(function(err){
      return res.json(post)
    })
  } catch (error){
    res.status(400).json(error)
  }
}