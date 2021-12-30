const express = require ('express')
const router = express.Router()
const data = require('../../data/pca.json')
const STATE_CODE = require('../../config/stateCode.js')
const { query } = require('../../db/db.js')
const { products } = require('../../config/db.js')

router.get('/', (req, res) => {
  query({fields: '*', conditions: `id = ${req.query.prodocut_id}`, tabName: products}, (error, results) => {
    let obj = error ? {error: error, data: []} : {error: 0, data: results[0]};
    res.send(obj)
  })
})

module.exports = router
