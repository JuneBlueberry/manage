/**
 * 登录API Created by Abner on 2017/1/20.
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
  if(ret == 'error') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 学生登录接口
router.post('/studentLogin',(req,res) => {
  var sql= $sql.login.studentLogin;
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.username,params.password],function(err,result){
    if(err){
      console.log(err);
    }
    if(result) {
      console.log(result);
      jsonWrite(res, result);
    }else{
      jsonWrite(res,'error');
    }



    // 释放连接

  })
});

module.exports = router;
