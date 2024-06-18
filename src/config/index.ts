import dotenv from "dotenv";
dotenv.config();
export default {
  NODE_ENV: process.env.NODE_ENV,
  db_url: process.env.DB_URL,
  port: process.env.PORT,
  salt_round: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JSON_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JSON_ACCESS_EXPIRE_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JSON_REFRESH_EXPIRE_IN,
};
