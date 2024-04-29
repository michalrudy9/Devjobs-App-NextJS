import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";
export const GET = async (): Promise<Response> => {
  let response = {} as QueryResult<QueryResultRow>;
  try {
    response = await sql`SELECT * FROM job_offer_header`;
  } catch (error) {
    throw new Error("An error occurred while fetching job offers!");
  }

  return Response.json(response.rows);
};
