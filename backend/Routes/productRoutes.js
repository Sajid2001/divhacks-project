const express = require('express');
const router = express.Router();

const ProductModel = require('../Models/Product')

router.get('/',(req,res) => {
    ProductModel.find()
    .then(result =>{
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    });
});

module.exports = router;