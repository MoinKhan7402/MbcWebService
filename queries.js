var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:secure@1234@localhost:8080/MBC';
var db = pgp(connectionString);


function getAllTask(req, res, next) {
    debugger;
    db.any('select * from tasklist')
        .then(function (data) {
          
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Retrieved ALL puppies',
                    data: data
                    
                });
        })
        .catch(function (err) {
            return next(err);
        });
}



module.exports = {
    getAllTask: getAllTask,
};