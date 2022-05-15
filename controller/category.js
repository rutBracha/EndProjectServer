const categorySchema=require('../models/category');
const { ObjectId } = require("mongodb");
module.exports={
   
    post :async function (req, res,next) {
        try {
                const category = new categorySchema(req.body);
                const inserted = await category.save();
                res.send(inserted);
            }
        catch (err) {
            next(err)
        }
    }
    
}