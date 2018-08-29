const app = require('express')
const path = require('path')
const router = app.Router()

module.exports = router

router.get('/', (req, res) => {
  const filepath = path.join(__dirname, 'index.html')
  res.sendFile(filepath)
})
