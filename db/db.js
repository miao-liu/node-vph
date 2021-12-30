const mysql = require('mysql')
const dbConfig = require('../config/db.js')
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  multipleStatements: true,
  typeCast: function (field, next){
    //对于boolean函数所做的转移
  	if (field.type === 'TINY' && field.length === 1) {
  	  return (field.string() === '1')
  	}
    return next()
  }
})

connection.connect(err => {
  if (err) {
  	console.log(err)
  } else {
  	console.log('数据库连接成功！')
  }
})

//查找
function query ({ fields, conditions, tabName }, cb) {
  let sql = `SELECT ${fields} FROM ${tabName}`
  sql = conditions ? sql + ' WHERE ' + conditions : sql
  connection.query(sql, function (error, results, fields) {
    cb(error, results)
  })
}

//插入一个
function insertOne (tabName, post, cb) {
  connection.query('INSERT INTO ' + tabName + ' SET ?', post, function(error, results, fields) {
    cb(error, results)
  })
}

//更新字段
function updateOne({ tabName, field, conditions }, cb) {
  let sql = ''
  if (conditions) {
    sql = `UPDATE ${tabName} SET ${field.name} = ${field.content} WHERE ${conditions.key} = '${conditions.val}'`
  } else {
    sql = `UPDATE ${tabName} SET ${field.name} = ${field.content}`
  }
  connection.query(sql, function(error, results, fields) {
    cb(error, results)
  })
}

//删除字段
function delOne({ tabName, field, conditions }, cb) {
  const sql =`DELETE FROM ${tabName} WHERE ${conditions}`
  connection.query(sql, function(error, results, fields) {
    cb(error, results)
  })
}

//多语句sql执行
function multipleSql (sqls, cb) {
  connection.query(sqls, function (error, results, fields) {
  	cb(error, results)
  })
}

module.exports = {
  query,
  multipleSql,
  insertOne,
  updateOne,
  delOne
}
