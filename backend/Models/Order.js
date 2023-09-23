const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    price:{
        type: Number,
        required:true,
    },
    form:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    amount:{
        type: Number,
        required:true,
        max:3
    },
    imageUrl:{
        type: String,
        required:true,
        min: 6,
        max:255
    },

})

const OrderModel = mongoose.model("order", OrderSchema);
module.exports = OrderModel;