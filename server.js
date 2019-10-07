const express = require('express');
const app =express();
require('./models/db');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const userController = require('./controllers/users');
const orderController = require('./controllers/orderController');
const passport = require('passport');
require('./config/passport');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(session({
    secret: 'mysecretapp',
    resave:true,
    saveUninitialized:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    partialsDir:path.join(app.get('views'),'partials'),
    layoutsDir:__dirname + '/views/'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');

    next();
});

app.set('view engine', 'hbs');
app.listen(3000, () =>{
    console.log('Server on port: 3000');
});
app.use('/', orderController);
app.use('/', userController);


