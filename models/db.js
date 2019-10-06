const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://santiago:santiago123@cluster0-8hukm.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (err) => {
    if(!err) {
        console.log('DB connected');
    } else {
        console.log('error' + err);
    }
});

require('./order.models'); 