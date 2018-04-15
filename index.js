var mysql = require('mysql');

/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql"
});

conn.connect(function(err){
  if(err){
    throw err;
  }
  else{
    console.log("CONNECTED SUCCESSFULLY!");
    /*conn.query("CREATE DATABASE NODEMYSQL", function(err, result){
      if(err){
        throw err;
      }
      else{
        console.log("DATABASE HAS BEEN CREATED SUCCESSFULLY");
      }
    });*/
    conn.query("create table person_t(id int not null, name varchar(30) not null)", function(err, result){
      if(err){
        throw err;
      }
      else{
        console.log("Table has been created");
      }
    })
  }
});

