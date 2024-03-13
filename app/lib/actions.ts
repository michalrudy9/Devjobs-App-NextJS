import data from "@/app/lib/data.json";
import { JobOffer } from "@/models/JobOffer";
import { JobOfferHeader } from "@/models/JobOfferHeader";

export const getJobOfferHeaders: () => JobOfferHeader[] = () => {
  return data.map((item: JobOffer) => {
    return {
      id: item.id,
      company: item.company,
      logo: item.logo,
      logoBackground: item.logoBackground,
      position: item.position,
      postedAt: item.postedAt,
      contract: item.contract,
      location: item.location,
    };
  });
};

export const findJobOffer = (id: number): JobOffer | undefined => {
  return data.find((item: JobOffer) => item.id === id);
};

export const getJobOffer = (path: string): JobOffer | undefined => {
  const jobId = extractJobId(path);
  const wantedJobOffer = findJobOffer(jobId);
  return wantedJobOffer;
};

const extractJobId = (text: string): number => {
  const elements = text.split("/");
  const id = parseInt(elements[elements.length - 1]);
  return id;
};
