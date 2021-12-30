const express = require ('express')
const router = express.Router()
const data = require('../../data/pca.json')
const STATE_CODE = require('../../config/stateCode.js')
const { query, updateOne } = require('../../db/db.js')
const { userlist } = require('../../config/db.js')
router.get('/data', (req, res) => {
  res.send({
    error: STATE_CODE['SUCCESS'],
    data: data
  })
})

router.get('/list', (req, res) => {
  query({fields: 'useraddr', conditions: `username = '${req.query.username}'`, tabName: userlist}, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

router.post('/', (req, res) => {
  const data = req.body
  const username = data.username
  delete data.username
  updateOne({tabName: userlist, field: { name: 'useraddr', content: `CONCAT(useraddr,',${JSON.stringify(data)}')`}, conditions: {key: 'username', val: username}}, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

router.post('/del', (req, res) => {
  const { data } = req.body
  updateOne({tabName: userlist, field: {name: 'useraddr', content: `'${data}'`}}, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})
module.exports = router
