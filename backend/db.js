const mongoose = require("mongoose");
const uri =
  "mongodb+srv://gofoody:Wahab123@cluster0.w9469og.mongodb.net/gofoody?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Consider using the new URL parser by default
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });

    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

    // Additional processing or actions if needed
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = mongoDB;
