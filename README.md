# 🧠 MERN ThinkBoard

A full-stack **note management web application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.

ThinkBoard allows users to create, update, view, and delete notes in a clean and responsive interface. This project demonstrates practical full-stack development including **REST API development, database integration, and modern React UI development**.

---

## 🚀 Live Demo

🔗 **Live Application:**  
https://mern-thinkboard-egmo.onrender.com/

⚠️ Note: The app is deployed on **Render's free tier**, so it may take **30–60 seconds to load initially** due to server cold starts after inactivity.

---

# 🚀 Features

- 📝 Create new notes
- 📖 View all notes
- ✏️ Edit existing notes
- ❌ Delete notes
- ⚡ Fast REST API communication
- 📱 Responsive UI
- 🗄 MongoDB database integration

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- DaisyUI
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Tools
- Git
- GitHub
- dotenv
- Postman / Thunder Client

---

# 📂 Project Structure

```
mern-thinkboard
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
├── .env
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/Dathwik/mern-thinkboard.git
cd mern-thinkboard
```

---

# Backend Setup

```
cd backend
npm install
```

Create a `.env` file inside the backend directory.

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```
npm run dev
```

---

# Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/notes | Get all notes |
| GET | /api/notes/:id | Get note by ID |
| POST | /api/notes | Create note |
| PUT | /api/notes/:id | Update note |
| DELETE | /api/notes/:id | Delete note |

---

# 🧠 How It Works

1. User interacts with the React frontend.
2. React sends API requests to the Express backend.
3. Express processes the request.
4. MongoDB stores or retrieves data.
5. Updated data is returned to the frontend.

---

# 📌 Future Improvements

- User authentication (JWT)

---

# 👨‍💻 Author

**Dathwik Kollikonda**

GitHub:  
https://github.com/Dathwik

---

# ⭐ Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request
