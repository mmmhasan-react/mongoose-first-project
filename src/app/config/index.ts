import dotenv from "dotenv";

import path from "path";
import { cwd } from "process";

dotenv.config({ path: path.join(cwd(), ".env") });

export default {
  db_url: process.env.DB_URL,
  db_port: process.env.PORT,
};
