import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";
export const GET = async (): Promise<Response> => {
  let response = {} as QueryResult<QueryResultRow>;
  try {
    response = await sql`SELECT COUNT(*) AS amount FROM job_offers`;
  } catch (error) {
    throw new Error("An error occurred while fetching amount of job offers!");
  }

  return Response.json(response.rows[0]);
};
