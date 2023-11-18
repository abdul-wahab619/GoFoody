const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");

app.use(cors());

// Connect to MongoDB
mongoDB()
  .then(() => {
    // Define routes
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.use((req, res, next) => {
      res.setHeader("Allow-Control-Allow-Origin", "http://localhost:3000");
      res.header(
        "Allow-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    app.use(express.json());
    app.use("/api", require("./Routes/CreateUser"));
    app.use("/api", require("./Routes/DisplayData"));

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error connecting to MongoDB
  });
