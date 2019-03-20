var mysql  = require('mysql'); 

var connection = mysql.createConnection({  
  host     : '127.0.0.1',      
  user     : 'root',             
  password : '',      
  port: '3306',                  
  database: 'node',
});

connection.connect();

var  userAddSql = 'INSERT INTO user(id,name,age) VALUES(0,?,?)';

var  userAddSql_Params = ['Wilson', 55];

connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }       
       console.log('-------INSERT----------');
       console.log('INSERT ID:',result);       
       console.log('#######################'); 
});
connection.end();