const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB()
  .then(() => {
    // Define routes
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error connecting to MongoDB
  });
