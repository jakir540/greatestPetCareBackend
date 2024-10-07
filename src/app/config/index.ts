import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  BRYCPT_SLAT: process.env.beycrypt_slat_rounds,
  DEFAULT_PASSWORD: process.env.default_password,
  jwt_acces_secret: process.env.JWT_ACCESS_SECRET_TOKEN,
  NODE_ENV: process.env.NODE_ENV,
  PAYMENT_URL: process.env.PAYMENT_URL,
  STORE_ID: process.env.STORE_ID,
  SIGNATURE_Key: process.env.SIGNATURE_Key,
};
