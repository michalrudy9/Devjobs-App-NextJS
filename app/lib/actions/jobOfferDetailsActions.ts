import data from "@/app/lib/data.json";
import { JobOffer } from "@/models/JobOffer";

const extractJobId = (text: string): number => {
  const elements = text.split("/");
  const id = parseInt(elements[elements.length - 1]);
  return id;
};

const findJobOffer = (id: number): JobOffer | undefined => {
  return data.find((item: JobOffer) => item.id === id);
};

export const getJobOffer = (path: string): JobOffer | undefined => {
  const jobId = extractJobId(path);
  const wantedJobOffer = findJobOffer(jobId);
  return wantedJobOffer;
};
