const {Schema, model} = require("mongoose");

const formdata = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    contactNumber: {
        type:String,
        required: true
    },
    institutionName:{
        type:String
    },
    requirement: {
        type:String,
        required: true
    },
})

const Formdata = new model("formdata", formdata);

module.exports = Formdata;