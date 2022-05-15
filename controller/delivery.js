const deliverySchema=require('../models/delivery');
const { ObjectId } = require("mongodb");
module.exports={
    getDeliveries: async function(req,res,next){
        try{
            const delivery =await deliverySchema.find()
           res.send(delivery)
        }
        catch(err){
            console.log(err)
            next(err)
        }
    },
    post :async function (req, res,next) {
        try {
                const delivery = new deliverySchema(req.body);
                const inserted = await delivery.save();
                res.send(inserted);
            }
        catch (err) {
            next(err)
        }
    }
    
}