const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

class mongoosedb{
    constructor(){}
    async connect(){
        const url=process.env.CONNECTION_STRING;
        await mongoose.connect(url);
        console.log("hello to mongoose")
    }
}
module.exports=new mongoosedb();