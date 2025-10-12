# Project boostrapping 

# Frontend
--npm create vite@latest pm-tracker-frontend -- 
--template react
--cd pm-tracker-frontend
--npm install
--npm install tailwindcss postcss autoprefixer
--npx tailwindcss init -p

# Backend
--mkdir pm-tracker-backend && cd pm-tracker-backend
--npm init -y
--npm install express mongoose jsonwebtoken bcryptjs dotenv cors
--npm install --save-dev nodemon

# Project: Project Management and Task Tracker

##Overview

Project Management and Task Tracker is a real-time project management system that helps teams track tasks, monitor project progress, and analyze performance efficiently.
It provides a clean UI for users to create, update, and manage tasks while connecting to a Node.js backend for secure API handling and data storage.


##Objectives

To develop a responsive web-based project management system.

To implement REST APIs for task, project, and user operations.

To ensure smooth communication between frontend (UI) and backend (Node.js API).

To visualize analytics (task completion, team performance, event tracking).

##Key Features

--User Authentication (Register / Login)

--Create & Manage Projects

--Task Assignment and Status Tracking

--Real-time Updates via API

--Comment & Collaboration Module

--Event Analytics (Activity Logs, Task Metrics)


##Technology Stack

Layer	Tools / Frameworks

--Frontend	HTML5, - CSS3, JavaScript
-Backend	Node.js, Express.js
-Database	MongoDB (via Mongoose)
-API Testing	Postman
-Version Control	Git & GitHub
-Deployment	IBM Cloud / Render / Vercel


##Environment Setup

1. Clone the repository

git clone https://github.com/Rohinthan/Project-management-and-task-tracker/tree/main


2. Install dependencies (Backend)


cd Back-end

npm install


3. Run the backend server

node server.js

Server runs at: http://localhost:5000


4. Open Frontend

Open Front-end/src/index.html in your browser.



##API Design & Data Models

Category	Endpoint	Method	Description

Auth	/api/v1/auth/register	POST	Register new user
	/api/v1/auth/login	POST	User login
Project	/api/v1/project	POST	Create new project
Task	/api/v1/tasks	POST	Create task
	/api/v1/tasks/:id/status	PUT	Update task status
	/api/v1/tasks/:id/comments	POST	Add comment
Analytics	/api/v1/events	GET	Fetch event data


All request/response examples are stored inside the /API/ folder.



##Data Models

- Located in /Back-end/models/

- Model	File	Description

- User	user.js	Stores username, email, password
- Project	project.js	Project details
Task. task.js	Task info, assigned users, status

- Comment	comment.js	Comments for each task
Event	event.js	Analytics & activity logs



##Deployment Plan

- Backend → IBM Cloud (Node.js runtime)

- Database → MongoDB Atlas

- Frontend → Vercel / GitHub Pages

- CI/CD → Automated via GitHub Actions



##KPIs & Use Cases

--Track project completion rates

--Measure user activity through events

--Reduce manual task tracking

--Improve project transparency

---

---

### **Developer**
**Rohinthan** – Engineering Student  
 Passionate about crafting reliable, scalable, and meaningful software solutions that bridge innovation with real-world impact.
