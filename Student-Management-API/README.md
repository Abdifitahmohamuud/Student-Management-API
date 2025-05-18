# Student Management API (by Eng Abdifitah)

This API allows you to create, read, update, and delete (CRUD) student records using Express.js and MongoDB (Mongoose).

## Features
- **CRUD**: Create, Read, Update, Delete student records.
- Student data fields: `id`, `name`, `age`, `Studentclass`.
- Simple RESTful endpoints.

## Usage

### 1. Install dependencies
```bash
npm install
```

### 2. Database
- Ensure that you have a MongoDB instance running at `mongodb://localhost:27017/SchoolDB`.

### 3. Start the server
```bash
npm start
```

### 4. API Endpoints
- **GET** `/students` — Retrieve all students.
- **GET** `/students/:id` — Retrieve a specific student.
- **POST** `/students` — Create a new student.
- **PUT** `/students/:id` — Update a student.
- **DELETE** `/students/:id` — Delete a student.

## Important Files & Folders
- **server.js** – The entry point of the application. It sets up the Express server, connects to the API routes (from routes/studentRoutes.js), and listens on port 3000.
- **routes/studentRoutes.js** – Defines the API endpoints (GET, POST, PUT, DELETE) for students. It uses the controller (controllers/studentController.js) to handle the business logic.
- **controllers/studentController.js** – Contains the CRUD functions (createStudent, getStudents, getOneStudent, updateStudent, deletOne) that interact with the student model (models/studentSchema.js) and send responses back.
- **models/studentSchema.js** – Defines the Mongoose schema (studentScheme) for a student (with fields id, name, age, Studentclass) and exports a Mongoose model (student) that connects to the database (using config/database.js).
- **config/database.js** – Exports a Mongoose connection (using "mongodb://localhost:27017/SchoolDB") so that the model (models/studentSchema.js) can interact with the database.

## Author
– Eng Abdifitah 