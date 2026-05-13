const mongoose=require('mongoose');


const attributeSchema= new mongoose.Schema({
    title:String,
    link:String,
    imageUrl:String,
    imageFileUrl:String,
    priority:String,
    allotedAmount:String,
    created:String,
    bought:Boolean
})

const Attribute = mongoose.model("Attribute", attributeSchema);

module.exports=Attribute;