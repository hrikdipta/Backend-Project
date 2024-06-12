import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './db.js'
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
const app = express();
const port = process.env.PORT || 5000 ;

dotenv.config();

// Connect to MongoDB
connectDB();

//middlewires
app.use(express.json());

//routes
app.use('/api/auth',authRoute);
app.use('/api/posts',postRoute)

//listen to port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})