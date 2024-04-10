import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";

export const POST = async (request: Request) => {
    const res = await request.json();
    console.log(res);
    
//   let jobOfferResponse = {} as QueryResult<QueryResultRow>;
//   try {
//     jobOfferResponse = await sql`SELECT * FROM get_job_offer_data()`;
//     response = await sql`SELECT * FROM job_offer_header`;
//   } catch (error) {
//     throw new Error("An error occurred while fetching job offers!");
//   }
    return Response.json({ res });
};

/*
CREATE OR REPLACE FUNCTION get_job_offer_roles(offer_id integer) 
	RETURNS TABLE("roles" text, abc text []) 
	AS $$
    BEGIN
		RETURN QUERY SELECT r.name FROM job_offers_role AS jor INNER JOIN "role" AS r ON r.id = jor.role_id WHERE jor.job_offers_id = offer_id; 
    END;
$$ LANGUAGE plpgsql; */