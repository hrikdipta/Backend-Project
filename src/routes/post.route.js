import express from 'express';
import {verifyUser} from '../utils/verifyUser.js'
import {createPost,getAllPosts,getPost,updatePost,deletePost} from '../controllers/post.controller.js'
const router = express.Router();

router.post('/createpost',verifyUser,createPost);
router.get('/',getAllPosts);
router.get('/:id',getPost);
router.put('/updatepost/:id',verifyUser,updatePost);
router.delete('/deletepost/:id',verifyUser,deletePost);

export default router;