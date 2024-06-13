import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required: true,
    },
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type: mongoose.ObjectId, // Reference to the Category model
        ref:'Category', // Name of the referenced model
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    photo:{
        data:Buffer, // Storing image data as Buffer (consider alternatives)
        contentType:String,
    },
    shipping:{
        type: Boolean,
    },
},
{ timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

export default mongoose.model('Products', productSchema);
