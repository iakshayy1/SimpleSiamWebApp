let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var RegisterSchema = new Schema({
    "firstname": {type:String, required:true},
    "lastname": {type: String, required: true},
    "email": {type: String, required: true,unique : true},
    "password": {type:String, required:true,unique : true},
    "cpassword": {type:String, required:true,unique : true}

    });

var RegisterModel = mongoose.model("registers", RegisterSchema);
module.exports = RegisterModel;
