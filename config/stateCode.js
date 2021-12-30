module.exports = {
  SUCCESS: 0,    //响应成功
  NEVER_REGISTER: 1,  //从没有注册，没有此用户
  SERVER_ERROR: 2,    //服务器错误
  DATA_ERROR: 3,     //数据库错误
  PASSWORD_ERROR: 5, //密码错误
  ER_DUP_ENTRY: 6    //数据库主键重复
}