import { AmountOffers } from "@/models/response/AmountOffers";

export const fetchAmountOfJobOffers = async (): Promise<AmountOffers> => {
  const response = await fetch("/api/amount-job-offers");

  if (!response.ok) {
    throw new Error("An error occurred while fetching amount of job offers!");
  }

  const data = (await response.json()) as AmountOffers;
  return data;
};
