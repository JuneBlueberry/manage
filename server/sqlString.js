/**
 * sql语句 Created by Abner on 2017/1/16.
 */

var sqlString = {
  //设置Sql
  setting : {
    addOpinion : 'insert into opinion(title,mob,content) value(?,?,?)',
  },
  //登录Sql
  login : {
    studentLogin : 'select count(*) from student where stuNumber=? and password=?',
  }
}

module.exports = sqlString;
