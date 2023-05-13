const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

// connect to mongoDB atlas(our database)

const DB = process.env.DATABASE;

const connectDB = async () => {
  await mongoose.connect(DB);
  console.log("Successfully Connected to Database");
};
connectDB();

//Starting the server

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
