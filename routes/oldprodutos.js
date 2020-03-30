
app.get("/produtos",function(req,res) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'usuarios'
    });

    connection.query('select * from usuario', 
        function(err,result,fields){
            res.send(result);
    });
    
    connection.end();
});




app.get("/produtos",function(req,res) {
    console.log('sera?');
    
    res.send('produtos/lista');
    });