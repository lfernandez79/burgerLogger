var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol, cb) {
        var queryStrg = "SELECT * FROM ?? WHERE ?? = ?";
        RTCPeerConnection.query(queryStrg, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            cb(result)
        })
    }

    
};

module.exports = orm;
