// import { sql } from "@vercel/postgres";
import postgres from "postgres";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

export const getJobOffersDB = async () => {
    const data = await sql`select * from job_offers`;
    return data;
}