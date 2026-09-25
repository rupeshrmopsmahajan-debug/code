import postgres from "postgres";

// Fetch database connection string from environment variables
const connectionString = process.env.DATABASE_URL;

// Initialize postgres client instance for SQL queries
const sql = postgres(connectionString, {
  ssl: process.env.NODE_ENV === "production" ? "require" : false,
});

export default sql;