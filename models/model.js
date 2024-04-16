import mongoose from "mongoose"

const Schema = mongoose.Schema({
    subject:{
        type:String,
        default:"No subject"
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        default:"Anonymous"
    },
    createdAt:{
        type: Date,
        // required:true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }

})

const model = mongoose.model('Blog',Schema)

export default model