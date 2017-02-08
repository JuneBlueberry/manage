/**
 *  设置API Created by Abner on 2017/1/16.
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
  if(ret === 'error') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 意见反馈接口
router.post('/addOpinion',(req,res) => {
  var sql= $sql.setting.addOpinion;
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.title,params.mob,params.content],function(err,result){
    if(err){
      console.log(err);
    }
    if(result) {
      console.log(result);
      jsonWrite(res, result);
    }else{
      jsonWrite(res, "error");
    }

  })
});

module.exports = router;
