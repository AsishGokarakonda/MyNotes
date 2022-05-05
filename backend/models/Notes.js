const mongoose = require("mongoose")
const NotesSchema = new Schema({ 
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type:String,
        default:"this is tag"
    },
    date:{
        type:Date,
        default:Date.now
    } });

module.exports = mongoose.model("notesch",NotesSchema)