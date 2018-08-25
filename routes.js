const app = require('express')
const path = require('path')
const router = app.Router()

module.exports = router

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
