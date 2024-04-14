import { FilterData } from "@/models/FilterData";
import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";

export const POST = async (request: Request) => {
  const requestData = (await request.json()) as FilterData;

  let response = {} as QueryResult<QueryResultRow>;

  try {
    response = await sql.query(`SELECT * FROM filter_job_offers($1, $2, $3)`, [
      requestData.searchText,
      requestData.location,
      requestData.fullTime,
    ]);
  } catch (error) {
    throw new Error("An error occurred while fetching filtered job offers!");
  }

  return Response.json(response.rows);
};
