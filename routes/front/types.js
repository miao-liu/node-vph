const express = require ('express')
const router = express.Router()
const STATE_CODE = require('../../config/stateCode.js')

const { query, multipleSql } = require('../../db/db.js')

const dbConfig = require('../../config/db.js')

//总分类，用于产品分类页面
router.get('/all', (req, res) => {
  query({ fields: 'type_id,name,background_pic', conditions: '', tabName: dbConfig.level_1 }, (error, results) => {
  	let obj = error ? {error: error, data: []} : {error: 0, data: results};
  	res.send(obj)
  })
})

//总分类下分类列表，用于产品分类页面
router.get('/items', (req, res) => {
  let { type_id } = req.query,
      sql1 = `SELECT top_img FROM ${dbConfig.level_1} WHERE type_id = ${type_id}`,
      sql2 = `SELECT type_id,name FROM ${dbConfig.level_2} WHERE _type_id = ${type_id}`,
      data = {top_img:'', items: []}
  
  multipleSql(sql1 + '; ' + sql2, (error, results) => {  	results[0][0] && (data.top_img = results[0][0].top_img)
  	data.items.push(...results[1])
  	let sqls = ''
  	results[1].forEach(item => {
  	  sqls += `SELECT info.name,info.thumb,type.id FROM ${dbConfig.level_4} type,${dbConfig.level_3} info WHERE type.type_id_one = ${type_id} AND type.type_id_two = ${item.type_id} AND type.type_id_three = info.type_id; `;
  	})
  	if(results[1].length){
      multipleSql(sqls, (error, results) => {
  	    results.forEach((item, idx) => {
  	  	data.items[idx].children = []
  	  	data.items[idx].children.push(...item)
  	  })
  	  let obj = error ? {error: error, data: []} : {error: 0, data: data};
  	  res.send(obj)
  	 })
  	}else{
  	  res.send({error: 0, data: []})
  	}
  })
})

//获取热搜产品，用于搜索页面
router.get('/hots', (req, res) => {
  query({ fields: 'type_id,name', conditions: 'is_hot = true', tabName: dbConfig.level_3 }, (error, results) => {
    if(error) console.log(error);
  	let obj = error ? {error: STATE_CODE[DATA_ERROR], data: []} : {error: 0, data: results};
  	res.send(obj)
  })
})

module.exports = router
