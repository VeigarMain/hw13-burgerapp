const connection = require("./connection.js");


function printQuestionMarks(num) {
  var arr = [];
  //returns a string of "?, ?, ?" with a 'num' number of question marks
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  //loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    //check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      //if string with spaces, add quotations (Michael Jordan => 'Michael Jordan')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      //{sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  //return single comma-separated string
  return arr.toString();
}






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
       console.log("orm", vals); 
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        
        console.log(queryString);

        connection.query(queryString, vals, ((err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        }));
      },
     
      updateOne: function(table, col, val, id_col, id_num, cb) {
        console.log("orm", val);
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = " + val.devoured;
    
        console.log(queryString);
        connection.query(queryString, ((err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        }));
      },
}

module.exports = orm

