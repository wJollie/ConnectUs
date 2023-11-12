const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/programming-thoughts",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Get the default connection
const db = mongoose.connection;

// Event listener for the connection error
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Event listener for the successful connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Export the connection
module.exports = db;
