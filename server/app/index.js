const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routerHandler = require("./routes");

const connectDB = require("./db/config");

connectDB();

// Configure specific origins
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://69e015631254845e8fc4c232--fs-api-demo.netlify.app",
    "https://fs-api-demo.netlify.app",
  ], // Match your frontend's address
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", routerHandler);

module.exports = app;
