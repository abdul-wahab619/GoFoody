const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    // Combine food_items and foodCategory into a single object
    const responseData = {
      food_items: global.food_items,
      foodCategory: global.foodCategory,
    };

    // Send the combined data as a response
    res.send(responseData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
