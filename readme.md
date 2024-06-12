## Setup Instructions

1. Clone the repository
    git clone <repo url>
    cd Backend Project

2. Insatll dependencies
    npm install
    
3. set up enviromental variables
    create a file '.env' in root directory and add the following

        PORT=3000

        MONGODB_URI="mongodb+srv://hrikdiptakundu123:eLIbWVqhukYyDbOt@cluster0.g5oijl1.mongodb.net/retryWrites=true&w=majority&appName=Cluster0"

        JWT_SECRET="hrikdiptakundu123"

4. Run the server
    npm run dev

## API endpoints

# auth API

create a new user : `POST /api/auth/signin`
login as a user : `POST /api/auth/login`

# post API 

create a new post : `POST /api/posts/createpost`
Retrieve all blog posts : `GET /api/posts/`
Retrieve a single blog post by ID : `GET /api/posts/:postId`
Update an existing post : `PUT /api/posts/updatepost/:postId`
Delete a blog post : `DELETE /api/posts/deletepost/:postId`