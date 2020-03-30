//var app = require('../custom-express')();


module.exports = function(app) {
    var mysql = require('mysql');
    app.get("/produtos",function(req,res) {
        
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'rubinho2x',
            database : 'usuarios',
            insecureAuth : true
        });

            connection.query('select * from usuario', 
            function(err,result,fields){
                if(err) console.log(err);
                
                res.render("../views/produtos/lista",{lista:result});
                
        });        
        
            connection.end();

    });
    }   