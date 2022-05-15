const mongoose = require('mongoose');
var Schema   = mongoose.Schema;


const delivery= new mongoose.Schema({
    img: {
        type: String,
    },
    phone: {
        type: String,
        minlength: 10
    },
    name: {
        type: String,
        min: 2
    },
    categorya_id : {
        type: Schema.Types.ObjectId,
        ref: 'Category'
   },
});
module.exports = mongoose.model('Delivery', delivery);
