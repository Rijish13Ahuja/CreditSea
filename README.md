# CreditSea

CreditSea is a web application for managing and visualizing credit reports. It includes a backend built with Node.js, Express, and MySQL (TiDB) and a frontend using React.js with animations and charts.

---

## 📌 Project Structure

```
CreditSea/
│── backend/          # Node.js + Express backend
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   ├── controllers/
│   │   │   ├── uploadController.js
│   │   │   ├── userController.js
│   │   ├── middleware/
│   │   │   ├── uploadMiddleware.js
│   │   ├── routes/
│   │   │   ├── uploadRoutes.js
│   │   │   ├── userRoutes.js
│   │   ├── app.js
│   │   ├── server.js
│   ├── uploads/
│   │   ├── Darshan_Raut_KP1.xml
│   │   ├── Sagar_Ugle1.xml
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│── frontend/         # React.js frontend
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── UserTable.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── UserDetails.js
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── header.css
│   │   │   ├── home.css
│   │   │   ├── table.css
│   │   │   ├── userDetails.css
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── service-worker.js
│   │   ├── serviceWorkerRegistration.js
│   │   ├── setupTests.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│── README.md         # Project documentation
```

---

## 🚀 Setup Instructions

### 1️⃣ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MySQL](https://www.mysql.com/) or [TiDB](https://tidbcloud.com/) for database
- [Nodemon](https://www.npmjs.com/package/nodemon) (for backend auto-reload during development)

---

### 2️⃣ Backend Setup

1. **Clone the repository**
```sh
 git clone https://github.com/Rijish13Ahuja/CreditSea.git
 cd CreditSea
```

2. **Install dependencies**
```sh
 cd backend
 npm install
```

3. **Configure Environment Variables**
Create a `.env` file in the `backend` directory:
```env
DB_HOST=gateway01.us-west-2.prod.aws.tidbcloud.com
DB_USER=2mKMmhGLH8QVXPR.root
DB_PASSWORD=XJfGDCDe7o4g30EE
DB_NAME=test
DB_PORT=4000
PORT=5000
```

4. **Start the backend server**
```sh
 npx nodemon src/server.js
```
The server should start on `http://localhost:5000/`

---

### 3️⃣ Frontend Setup

1. **Navigate to the frontend directory**
```sh
 cd frontend
```

2. **Install frontend dependencies**
```sh
 npm install
```

3. **Start the frontend server**
```sh
 npm start
```
The React app should be running on `http://localhost:3000/`

---

## 🛠 API Endpoints

### 📌 User Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/users` | Fetch all users |
| GET | `/api/users/:id` | Fetch user details with credit summary |
| POST | `/api/upload` | Upload and process XML files |

---

## 🧪 Testing Instructions

### 1️⃣ Backend Tests
Run the following command in the backend directory:
```sh
 npm test
```

### 2️⃣ API Testing (Postman or cURL)
Example API call using `cURL`:
```sh
 curl -X GET http://localhost:5000/api/users
```

### 3️⃣ Frontend Tests
Run unit tests in the frontend directory:
```sh
 npm test
```

---

## 🎯 Features
✅ Secure MySQL (TiDB) database connection<br>
✅ XML file parsing & user data extraction<br>
✅ Dynamic credit report visualization with charts<br>
✅ Responsive UI with animations<br>
✅ Error handling & validation<br>

---

## 📌 Deployment (Optional)
To deploy the frontend:
```sh
 npm run build
```
To deploy the backend, use a cloud platform like **Heroku, Vercel, or AWS**.

---



