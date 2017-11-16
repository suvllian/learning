var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbConfig = require('./../models/db-config');
var dailySql = require('./../models/daily-sql');
// 创建Mysql连接池
var pool = mysql.createPool(dbConfig.mysql);
// 返回JSON数据
var responseJSON = function (res, ret) {
  typeof ret === 'undefined' ? res.json({code: '-200', msg: '操作失败'}) :
    res.json(ret)
}

router.get('/addArticle', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    var param = req.query || req.params;

    connection.query(dailySql.insert, 
      [param.article_type, param.title, param.intro, param.imgUrl, param.link], function(err, result) {
      result = result ?  { code: 200, data: result } : null
      responseJSON(res, result);
      connection.release()
    });
  });
});

module.exports = router;
