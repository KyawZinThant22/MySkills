const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DB.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Db connection successful and App running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
