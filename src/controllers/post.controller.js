import Post from '../models/post.model.js'

// Create a new blog post
export const createPost = async (req,res)=>{
    const {title , content} = req.body;
    if(!title || !content){
        return res.status(400).json({msg:"Title or Content are required to create post"});
    }
    try {
        const newPost = await Post.create({
            title,
            content,
            author : req.user.id
        });
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({msg:'Error creating post ' + error.message});
    }
}

// Get all blog posts
export const getAllPosts = async (req,res)=>{
    try {
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({msg:'Internal Server Error' + error.message})
    }
}

// Get a single blog post

export const getPost = async (req,res)=>{
    const {id}= req.params;
    try {
        const post = await Post.findById(id);
        if(!post){
            return res.status(404).json({'message':'Post not found'})
        }
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({msg:'Internal Server Error' + error.message})
    }
}

// Update a blog post

export const updatePost = async (req,res)=>{
    const {id} = req.params;
    const {title,content} = req.body;
    if(!title && !content){
        return res.status(400).json({msg:'Please enter title or content to update post'});
    }
    try {
        const newPost = await Post.findByIdAndUpdate(id,{
            title,
            content
        },{new:true});
        return res.status(200).json(newPost);
    } catch (error) {
        return res.status(500).json({msg:'Error updating post' + error.message});
    }
}

// Delete a blog post

export const deletePost = async (req,res)=>{
    const {id} = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        if(!post){
            return res.status(404).json({msg:'Post not found'})
        }
        return res.status(200).json({msg:'Post Deleted'});
    } catch (error) {
        return res.status(500).json({msg:'Error Deleting post' + error.message});
    }
}