const STATE_CODE = require('../../config/stateCode.js')

const express = require ('express')
const router = express.Router()

const { query } = require('../../db/db.js')
const { products } = require('../../config/db.js')

router.get('/type', (req, res) => {
	let { type_id } = req.query
	query({ fields: '*', conditions: 'type_id = ' + type_id, tabName: products}, (error, results) => {
		if(error) console.log(error);
	    let obj = error ? {error: STATE_CODE[DATA_ERROR], data: []} : {error: 0, data: results};
	    res.send(obj)
	})
})

module.exports = router
