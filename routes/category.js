var express = require('express');
var router = express.Router();
const categoryController=require('../controller/category');


router.post('/',categoryController.post);


module.exports=router;