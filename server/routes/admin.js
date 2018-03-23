/*eslint-disable */
const express = require('express')

const router = express.Router()
const ProductsModel = require('../models/ProductsModel')

router.get('/', (req, res) => {
  res.send('admin page routing')
})

// admin/1
router.get('/1', (req, res) => {
  res.send('admin/1로 get 요청')
})

module.exports = router;

