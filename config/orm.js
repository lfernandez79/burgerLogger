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

    insertOne: function(whereToInsert, insertInto, insertValue, cb) {
        var queryInsert = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryInsert, [whereToInsert, insertInto, insertValue,], function(err, result) {
          if (err) {
              throw err;
          } 
            cb(result);
    });
  },

  updateOne: function (id, cb) {
      var queryUpdate = "UPDATE burgers SET devoured = true WHERE id = " + id;
      connection.query(queryUpdate, function (err, res) {
          if (err) {
              throw err;
          }
          cb(res);
      });
  },


  
}
module.exports = orm;
