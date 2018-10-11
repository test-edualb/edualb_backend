var mysql = require('mysql');



    
var connection = mysql.createConnection({
        
	host: "",
	user: "",
	password: "",
	port     : '',
	database:''   

  
});



connection.connect();

module.exports = connection;
