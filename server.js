// ezrOAv7dUpiHUL1w
const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Anna:ezrOAv7dUpiHUL1w@cluster0.7pwv9k5.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
