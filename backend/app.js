const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

const productRoutes = require('./Routes/productRoutes')
const orderRoutes = require('./Routes/orderRoutes')
const userRoutes = require('./Routes/userRoutes')

dotenv.config();

const app = express()
const port = process.env.PORT;


mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => {
        app.listen(port)
        console.log('connected to port ' + port);
        console.log('connected to db');
    })
    .catch((err) => console.log(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/orders', orderRoutes)
app.use('/products', productRoutes)
app.use('/users', userRoutes)