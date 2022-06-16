const express = require("express");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todo.route");

const app = express();

app.use([express.json(), express.urlencoded({ extended: true })]); // Express >= 4.16.0

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log("Error:", err.message));
