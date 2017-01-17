/**
 * Created by Abner on 2017/1/16.
 */
"use strict";
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlString');

//连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 创建账号接口
router.post('/addOpinion',(req,res) => {
  var sql= $sql.opinion.add;
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.title,params.mob,params.content],function(err,result){
    if(err){
      console.log(err);
    }
    if(result) {
      jsonWrite(res, result);
    }

    // 以json形式，把操作结果返回给前台页面
    jsonWrite(res, result);

    // 释放连接

  })
});

module.exports = router;
