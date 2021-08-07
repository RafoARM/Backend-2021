// Import mongoose
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true            
        },
        description: {
            type: String,
            required: true            
        },
        color: {
            type: String,
            required: true            
        },
        origin: {
            type: String,
            required: true            
        },
        price: {
            type: Number,
            required: true            
        },
    }
);

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;