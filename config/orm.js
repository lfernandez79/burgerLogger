var orm = {
    selectAll: function(tableInput, cb) {
        var queryStrg = "SELECT * FROM " + tableInput + ";";
        connection.query(queryStrg, function(err, result){
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    insertOne: function(whereToInsert, insertInto, insertValue) {
        var queryInsert = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryInsert, [whereToInsert, insertInto, insertValue,] function(err, result) {
          if (err) {
              throw err;
          } 
    });
  },

}
module.exports = orm;
