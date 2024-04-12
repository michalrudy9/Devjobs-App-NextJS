import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";

import { JobOffer } from "@/models/JobOffer";

type RequestData = { id: number };

export const POST = async (request: Request) => {
  const requestData = (await request.json()) as RequestData;
  let data: QueryResult<QueryResultRow>[] = [];

  try {
    const jobOfferDataPromise =
      await sql`SELECT * FROM get_job_offer_data(${requestData.id})`;
    const jobOfferRequirementsPromise =
      await sql`SELECT * FROM get_job_offer_requirements(${requestData.id})`;
    const jobOfferRolesPromise =
      await sql`SELECT * FROM get_job_offer_roles(${requestData.id})`;

    data = await Promise.all([
      jobOfferDataPromise,
      jobOfferRequirementsPromise,
      jobOfferRolesPromise,
    ]);
  } catch (error) {
    throw new Error("An error occurred while fetching job offer data!");
  }

  const jobOfferObject = prepareJobOfferObject(data);

  return Response.json(jobOfferObject);
};

const prepareJobOfferObject = (
  data: QueryResult<QueryResultRow>[]
): JobOffer => {
  let jobOfferObject = {} as JobOffer;
  const {
    id,
    company,
    logo,
    logo_background: logoBackground,
    position,
    posted_at: postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements_content,
    role_content,
  } = data[0].rows[0];

  jobOfferObject = {
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements: {
      content: requirements_content,
      items: data[1].rows.map((item) => item.requirement),
    },
    role: {
      content: role_content,
      items: data[2].rows.map((item) => item.role),
    },
  };

  return jobOfferObject;
};
