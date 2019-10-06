const express = require('express');
const app =express();
require('./models/db');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const orderController = require('./controllers/orderController');

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname + '/views/'
}));
app.set('view engine', 'hbs');
app.listen(3000, () =>{
    console.log('Server on port: 3000');
});
app.use('/', orderController);


