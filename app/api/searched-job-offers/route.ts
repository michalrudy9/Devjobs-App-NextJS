import { FilterData } from "@/models/FilterData";
import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";

export const POST = async (request: Request) => {
  const requestData = (await request.json()) as FilterData;

  let response = {} as QueryResult<QueryResultRow>;
  
  try {
    response = await sql`SELECT * FROM filter_job_offers(${requestData.searchText}, ${requestData.location}, ${requestData.fullTime})`;
  } catch (error) {
    throw new Error("An error occurred while fetching filtered job offers!");
  }

  return Response.json(response.rows);

  // let data: QueryResult<QueryResultRow>[] = [];

  // try {
  //   const jobOfferDataPromise =
  //     await sql`SELECT * FROM get_job_offer_data(${requestData.id})`;
  //   const jobOfferRequirementsPromise =
  //     await sql`SELECT * FROM get_job_offer_requirements(${requestData.id})`;
  //   const jobOfferRolesPromise =
  //     await sql`SELECT * FROM get_job_offer_roles(${requestData.id})`;

  //   data = await Promise.all([
  //     jobOfferDataPromise,
  //     jobOfferRequirementsPromise,
  //     jobOfferRolesPromise,
  //   ]);
  // } catch (error) {
  //   throw new Error("An error occurred while fetching job offer data!");
  // }

  // const jobOfferObject = prepareJobOfferObject(data);

  return Response.json(requestData);
};
