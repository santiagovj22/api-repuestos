const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order:{type:String},
    total:{type:String}
});

mongoose.model('Order', orderSchema);