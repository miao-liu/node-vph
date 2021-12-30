const STATE_CODE = require('../../config/stateCode.js')

const express = require ('express')
const router = express.Router()
const crypto = require('crypto')
const { delOne, query, insertOne } = require('../../db/db.js')
const { userlist } = require('../../config/db.js')


router.post('/login', (req, res) => {
  let { username, userpass } = req.body
  let md5 = crypto.createHash('md5')
  query({fields:'userpass', conditions: `username = '${ username }'`, tabName:userlist}, (error, results) => {
    if (error) {
      res.send({
        code: STATE_CODE['DATA_ERROR']
      })
      return
    }
    if (results.length) {
        if (results[0].userpass === md5.update(userpass).digest('hex') ){
          res.send({
            code: STATE_CODE['SUCCESS']
          })
        }else{
          res.send({
            code: STATE_CODE['PASSWORD_ERROR']
          })
        }
    }else{
      res.send({
        code: STATE_CODE['NEVER_REGISTER']
      })
    }
  })
})

router.post('/reg', (req, res) => {
  let md5 = crypto.createHash('md5')
  let data = Object.assign(req.body, {userpass: md5.update(req.body.userpass).digest('hex'), useraddr: ''})
  insertOne(userlist, req.body, (error, results) => {
    if (error) {
      if (error.code === 'ER_DUP_ENTRY'){
        res.send({
          code: STATE_CODE['ER_DUP_ENTRY']
        })
      }else{
        res.send({
          code: STATE_CODE['DATA_ERROR']
        })
      }
    } else {
      res.send({
        code: STATE_CODE['SUCCESS']
      })
    }
  })
})

router.get('/del', (req, res) => {
  let { username } = req.query
  delOne({tabName: userlist, conditions: `username = '${username}'`}, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0};
    res.send(obj)
  })
})
module.exports = router
