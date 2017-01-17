/**
 * sql语句 Created by Abner on 2017/1/16.
 */

var sqlString = {
  //意见反馈
  opinion : {
    add : 'insert into opinion(title,mob,content) value(?,?,?)',
  }
}

module.exports = sqlString;
