const express = require('express');
const router = express.Router();

const OrderModel = require('../Models/Order');

router.get('/',(req,res) => {
    OrderModel.find()
    .then(result =>{
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    });
});

router.post('/',(req,res) => {
    const {name, price, form, amount, imageUrl} = req.body;
    const order = new OrderModel({name, price, form, amount, imageUrl})
    if(amount > 3 || amount < 0){
        res.send({"error":"Invalid amount to order"})
    }
    else{
        order.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
    }
    
});


module.exports = router;