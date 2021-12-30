post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
  if (error) throw error;
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

//INSERT INTO `shop`.`user_list` (`username`, `useremail`, `userpass`) VALUES ('monica', '123@qq.com', '123456')