const express = require ('express')
const router = express.Router()
const data = require('../../data/pca.json')
const STATE_CODE = require('../../config/stateCode.js')
const { query } = require('../../db/db.js')
const { products } = require('../../config/db.js')

router.post('/', (req, res) => {
  const { items } = req.body
  query({fields:'id,name,pic_imgs,price1', conditions: `id in(${items.toString()})`, tabName: products}, (error, results) => {
    let obj = error ? {error: error, data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

module.exports = router
