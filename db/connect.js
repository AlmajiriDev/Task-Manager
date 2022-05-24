const mongoose = require("mongoose")





const connectDB = function(url){
    return mongoose
    .connect(url, {useUnifiedTopology: true, useNewUrlParser: true})}


module.exports = connectDB

