const express = require ('express')
const router = express.Router()
const STATE_CODE = require('../../config/stateCode.js')
const { query } = require('../../db/db.js')

const dbConfig = require('../../config/db.js')

//获取推荐栏目，用于首页导航
router.get('/navs', (req, res) => {
  query({ fields: 'type_id, name', conditions: 'is_recommend = true', tabName: dbConfig.level_1 }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

//背景，用于首页不同板块
router.get('/bg', (req, res) => {
  let { area_id } = req.query
  query({ fields: 'img', conditions: 'area_id = ' + area_id, tabName: dbConfig.recommends_bg }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

//推荐。用于首页第一个板块
router.get('/recommends', (req, res) => {
  query({ fields: 'img, name, price_1, link ', conditions: 'area = 1', tabName: dbConfig.recommends }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

//精选好货类别  首页第二个板块
router.get('/selection_types', (req, res) => {
  query({ fields: 'img, name, link ', conditions: 'area = 2', tabName: dbConfig.recommends }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

//精选好货产品  首页板块
router.get('/selection_items', (req, res) => {
  query({ fields: 'img, name, price_2, link ', conditions: 'area = 3', tabName: dbConfig.recommends }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})

//今日特卖。首页板块产品
router.get('/today_items', (req, res) => {
  query({ fields: 'img, logo, price_1, price_2, link ', conditions: 'area = 4', tabName: dbConfig.recommends }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})


//今日特卖推荐栏目。首页板块产品
router.get('/today_types', (req, res) => {
  query({ fields: 'img, name, link ', conditions: 'area = 5', tabName: dbConfig.recommends }, (error, results) => {
    if(error) console.log(error);
    let obj = error ? {error: STATE_CODE['DATA_ERROR'], data: []} : {error: 0, data: results};
    res.send(obj)
  })
})
module.exports = router
