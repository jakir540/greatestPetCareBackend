import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    const port = config.port;
    app.listen(port, () => {
      console.log(`greatest pet care app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
