const mongoose=require('./mongoosedb');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
mongoose.connect();
app.use(express.json());
const deliveryRoute=require('./routes/delivery');
const categoryRoute=require('./routes/category');
const cors = require('cors');
app.use(cors());
app.use(express.static('static'));
app.use('/delivery',deliveryRoute);
app.use('/category',categoryRoute);

app.listen(port, () => {
   console.log(`hello from the server${port}`)
});