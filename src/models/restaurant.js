const mongoose = require('../database/index'), Schema = mongoose.Schema;

const restaurant_schema = new Schema({
    id: Schema.Types.ObjectId, 
    owner: Number,
    name: String,
    address: Object,
    status: String,
    image: Object,      
    openings: Array, 
    tags: Array,
    description: String,
    menus: Array,
    versionKey: false,
});

const restaurant = mongoose.model("restaurant", restaurant_schema);

module.exports = restaurant;