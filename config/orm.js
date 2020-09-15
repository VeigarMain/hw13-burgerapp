const connection = require("./connection.js");


const orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString,((err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        }));
      },
      insertOne: function(table, cols, vals, cb, name) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        
        console.log(queryString);

        connection.query(queryString, [table, name, cols, vals], ((err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        }));
      },
     
      updateOne: function(table, col, val, id_col, id_num, cb) {
        var queryString = "UPDATE ?? SET ?? = (?) WHERE ?? = (?)"
    
        console.log(queryString);
        connection.query(queryString, [table, col, val, id_col, id_num], ((err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        }));
      },
}

module.exports = orm

