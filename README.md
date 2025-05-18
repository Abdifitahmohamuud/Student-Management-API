# 🎓✨ Student Management API (by Enf Abdifitah)

---

![Students Banner](me.jpg)

---

## 🚀 What is this project?

> **Student Management API** is a modern, beginner-friendly RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. It lets you easily manage (Create, Read, Update, Delete) student records for any school, college, or learning platform.

---

## 🌟 Why use this API?

- 📚 **Easy to use**: Simple endpoints for all student operations
- 🏫 **Perfect for learning**: Great for students, teachers, and developers
- 🔒 **Secure & Scalable**: Built with best practices in mind
- ⚡ **Fast setup**: Get started in minutes!

---

## 🗂️ Project Structure

```text
.
├── server.js                 # 🚦 Main entry point (Express server)
├── routes/
│   └── studentRoutes.js      # 🛣️  All student API endpoints
├── controllers/
│   └── studentController.js  # 🧠 Business logic for students
├── models/
│   └── studentSchema.js      # 🗃️  Mongoose schema/model
├── config/
│   └── database.js           # 🔗 MongoDB connection setup
└── README.md                 # 📖 Project documentation
```

---

## 🔗 How does it work?

1. **Express.js** runs the server and handles HTTP requests.
2. **Routes** (in `routes/studentRoutes.js`) define the API endpoints (like `/students`).
3. **Controllers** (in `controllers/studentController.js`) contain the logic for each endpoint (CRUD operations).
4. **Models** (in `models/studentSchema.js`) define how student data is structured and stored in MongoDB.
5. **Database config** (in `config/database.js`) connects the app to your local MongoDB database.

---

## 🛠️ How to use (Step by Step)

### 1️⃣  Clone the repository
```bash
git clone https://github.com/Abdifitahmohamuud/Student-Management-API.git
cd Student-Management-API
```

### 2️⃣  Install dependencies
```bash
npm install
```

### 3️⃣  Start MongoDB
Make sure MongoDB is running locally at `mongodb://localhost:27017/SchoolDB`.

### 4️⃣  Start the server
```bash
npm start
```

### 5️⃣  Try the API!
Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test these endpoints:

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/students`        | Get all students           |
| GET    | `/students/:id`    | Get a student by ID        |
| POST   | `/students`        | Add a new student          |
| PUT    | `/students/:id`    | Update a student by ID     |
| DELETE | `/students/:id`    | Delete a student by ID     |

---

## 🧩 Example Student JSON
```json
{
  "id": 1,
  "name": "Enf Abdifitah",
  "age": 20,
  "Studentclass": "Class A"
}
```

---

## 🧠 How are the files connected?

- `server.js` imports routes from `routes/studentRoutes.js` and starts the server.
- `studentRoutes.js` uses controller functions from `controllers/studentController.js` for each endpoint.
- `studentController.js` uses the Mongoose model from `models/studentSchema.js` to interact with the database.
- `studentSchema.js` uses the MongoDB connection from `config/database.js`.

---

## 💡 Benefits

- 🔥 **Quick to deploy** for any student management need
- 🧑‍💻 **Great for learning** full-stack JavaScript
- 🏗️ **Easy to extend** (add more fields, features, or authentication)
- 🌍 **Open source** and ready for your contributions!

---

## 👨‍💻 Author

- **Enf Abdifitah**  
  [GitHub](https://github.com/Abdifitahmohamuud)

---

> _"Code with passion, learn with joy!"_ 
