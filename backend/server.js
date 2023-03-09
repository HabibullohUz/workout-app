const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workoutRouter")
const users = require('./routes/usersRouter')
const cors = require("cors");

dotenv.config();

// MiddelWare
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

// Muhim malumotlarni env dan olib olish
const port = process.env.PORT || 5001;
const url = process.env.MONGO_URL;

app.use(express.json())
app.use('/workouts', workoutRouter)
app.use('/users', users)

mongoose
  .connect(url)
  .then(() => {
      app.listen(port, () => {
        console.log(`Server running on port ${port} and successfully connected to database`);
      });
  })
  .catch((err) => {
    console.log(err);
  });
