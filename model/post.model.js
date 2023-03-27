const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {type : String},
    body: {type : String},
    device: {type : String},
    no_of_comments: {type : Number},
    userId:{type:String}
})

const PostModel = mongoose.model("post",postSchema);

module.exports ={ PostModel

}