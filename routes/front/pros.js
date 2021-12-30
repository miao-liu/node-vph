const express = require ('express')
const router = express.Router()
const recommend = require('../../data/index_recommend.json').data
const selection = require('../../data/index_selection.json').data
const today = require('../../data/index_today.json').data
router.get('/recommends', (req, res) => {
  res.send({
    error: 0,
    data: recommend
  })
})

router.get('/selection', (req, res) => {
  res.send({
    error: 0,
    data: selection
  })
})

router.get('/today', (req, res) => {
  res.send({
    error: 0,
    data: today
  })
})

module.exports = router
