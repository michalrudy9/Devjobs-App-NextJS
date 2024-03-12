import data from "@/app/lib/data.json";
import { JobOfferHeader } from "@/models/JobOfferHeader";

export const getJobOfferHeaders: () => JobOfferHeader[] = () => {
  const jobOfferHeaders: JobOfferHeader[] = [];
  for (const jobOffer of data) {
    jobOfferHeaders.push({
      id: jobOffer.id,
      company: jobOffer.company,
      logo: jobOffer.logo,
      logoBackground: jobOffer.logoBackground,
      position: jobOffer.position,
      postedAt: jobOffer.postedAt,
      contract: jobOffer.contract,
      location: jobOffer.location,
    });
  }
  return jobOfferHeaders;
};
