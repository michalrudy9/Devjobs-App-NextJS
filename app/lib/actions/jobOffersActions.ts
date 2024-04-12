import { JobOfferHeader } from "@/models/JobOfferHeader";

export const fetchJobOfferHeaders = async () => {
  const response = await fetch("/api/all-job-offers");

  if (!response.ok) {
    throw new Error("An error occurred while fetching job offers!");
  }

  const data = (await response.json()) as JobOfferHeader[];
  return data;
};
