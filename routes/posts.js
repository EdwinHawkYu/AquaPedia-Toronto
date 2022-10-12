const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/post')

router.get('/', postCtrl.index)
router.post('/', postCtrl.create)
router.get('/course/:id', postCtrl.show)
router.delete('/course/:id', postCtrl.delete)
router.put('/course/:id/edit', postCtrl.update)

module.exports = router;