import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    content:{
        type :String,
        required : true
    },
    author:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    }
},{timestamps: true});

const Post = mongoose.model('post',postSchema);
export default Post;