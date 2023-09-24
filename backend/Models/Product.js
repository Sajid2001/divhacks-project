const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    inventory:{
        type: Number,
        required:true,
        max:1001
    },
    retailPrice:{
        type: Number,
        required:true,
    },
    ourPrice:{
        type: Number,
        required:true,
    },
    form:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    description:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    imageUrl:{
        type: String,
        required:true,
        min: 6,
        max:255
    },

})

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;