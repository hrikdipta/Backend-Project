import express from 'express';
const router = express.Router();
import {signUp,logIn } from '../controllers/auth.controller.js'

router.post('/signup',signUp);
router.post('/login',logIn);

export default router;