import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    // console.log(config.db_url);
    app.listen(config.db_port, () => {
      console.log(`Example app listening on port ${config.db_port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
