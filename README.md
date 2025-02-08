# 🌱 My Blog (MERN Stack)

This is a **MERN (MongoDB, Express, React, Node.js)** stack blog application where users can create, edit, and delete blog posts. It also includes **authentication, notifications, settings, and user profiles**.

---

## 🚀 Features
- 📝 **Create, Read, Update, Delete (CRUD) Blog Posts**
- 🔐 **User Authentication (Login, Register, Logout)**
- 🛡️ **Protected Routes (Only logged-in users can create/edit/delete posts)**
- 🔔 **Notifications, Settings, and Profile Management**
- 📜 **Collapsible Sidebar Navigation**
- 🎨 **Styled with Tailwind CSS**

---

## 🛠️ **Installation & Setup**
Follow these steps to set up and run the project locally.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/blog-app.git
cd blog-app



🖥️ Backend Setup (Node.js + Express)
1.Navigate to the backend folder:  cd backend

2.Install dependencies: npm install

3.Create a .env file inside backend/ and add:

MONGO_URI=mongodb+srv://duviduk:iU4GZOOrhqMjQyz4@simpleblog.hfndl.mongodb.net/?retryWrites=true&w=majority&appName=SIMPLEblog
JWT_SECRET=your_jwt_secret_key
PORT=5000

4.Start the backend server:npm run dev

✅ Backend will run on http://localhost:5000

🎨 Frontend Setup (React + Vite)
1.Navigate to the frontend folder:cd frontend

2.Install dependencies:npm install

3.Start the frontend server:npm run dev

✅ Frontend will run on http://localhost:5173




🔥 API Endpoints
Here are the available REST API endpoints:

🔐 Authentication

Method	         Endpoint	                 Description
POST	        /api/users/register	     Register a new user
POST	       /api/users/login	         Login and get a token
GET	       /api/users/profile     	Get user profile (Protected)



📝 Blog Posts
Method	               Endpoint	                  Description
GET	             /api/posts                 	Get all blog posts
GET	            /api/posts/:id	            Get a single post by ID
POST           	/api/posts	           Create a new blog post (Protected)
PUT	            /api/posts/:id            	Update a blog post (Protected)
DELETE          	/api/posts/:id	          Delete a blog post (Protected)




📌 Features & Pages
Page	URL	Description
Home	/	Displays all blog posts
Login	/login	User login page
Register	/register	User registration page
Create Post	/create	Add a new blog post
Edit Post	/edit/:id	Edit an existing blog post
Post Details	/post/:id	View a single blog post
Notifications	/notifications	View notifications
Settings	/settings	Manage user settings
Profile	/profile	View and edit user profile
Help	/help	FAQs and support





🔧 Built With
🛠 Backend: Node.js, Express, MongoDB, Mongoose
🎨 Frontend: React, Vite, React Router, Axios, Tailwind CSS
🔐 Authentication: JSON Web Tokens (JWT)
🚀 State Management: React Context API
📜 License
This project is licensed under the MIT License.


