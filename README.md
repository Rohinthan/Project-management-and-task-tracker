# Project boostrapping 

# Frontend
npm create vite@latest pm-tracker-frontend -- --template react
cd pm-tracker-frontend
npm install
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Backend
mkdir pm-tracker-backend && cd pm-tracker-backend
npm init -y
npm install express mongoose jsonwebtoken bcryptjs dotenv cors
npm install --save-dev nodemon

#
