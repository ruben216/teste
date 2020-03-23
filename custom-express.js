var app = require('express')();

module.exports = function () {
    //var app = express();
    app.set('view engine', 'ejs');
    console.log('acessando o custom express...');
   
    require('./routes/produtos')(app);

    return app;
    
    };