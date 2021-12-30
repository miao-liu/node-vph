const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const history = require('connect-history-api-fallback')
const path = require('path')
const fs = require('fs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.resolve(__dirname, './www')))

//用户界面接口
const indexRouter = require('./routes/front/index')//首页
const typesRouter = require('./routes/front/types')//分类页
const regLogRouter = require('./routes/front/reg-login')//注册登录页面
const productsRouter = require('./routes/front/products')//产品列表页面
const addrRouter = require('./routes/front/addr')//地址页面
const detailRouter = require('./routes/front/detail')//产品详情地址
const cartRouter = require('./routes/front/cart')//购物车订单查询

app.use('/api/index', indexRouter)
app.use('/api/types', typesRouter)
app.use('/api/user', regLogRouter)
app.use('/api/products', productsRouter)
app.use('/api/addr', addrRouter)
app.use('/api/detail', detailRouter)
app.use('/api/cart', cartRouter)

app.get('/manage', function(req, res) {
	const html = fs.readFileSync(path.resolve(__dirname, './www/manage.html'), 'utf-8')
	res.send(html)
})
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './www/index.html'), 'utf-8')
    res.send(html)
})

app.listen(3000)