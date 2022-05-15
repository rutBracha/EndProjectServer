var express = require('express');
var router = express.Router();
const deliveryController=require('../controller/delivery');


router.post('/',deliveryController.post);
router.get('/',deliveryController.getDeliveries);

module.exports=router;