import dotenv from "dotenv";
import { initializePostgres } from "./postgres.js";
import { initializeMongo } from "./mongo.js";

dotenv.config();

// Determine which database to use
const DATABASE_TYPE = process.env.DATABASE_TYPE || "postgres";

export const initializeDatabase = async () => {
  if (DATABASE_TYPE === "postgres") {
    return await initializePostgres();
  } else if (DATABASE_TYPE === "mongo") {
    return await initializeMongo();
  } else {
    console.error(
      '❌ Invalid DATABASE_TYPE specified in .env. Choose "postgres" or "mongo".'
    );
    process.exit(1);
  }
};
