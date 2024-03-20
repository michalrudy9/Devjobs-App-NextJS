import { redirect } from "next/navigation";

import data from "@/app/lib/data.json";
import { JobOffer } from "@/models/JobOffer";
import { JobOfferHeader } from "@/models/JobOfferHeader";

export const getAllJobOfferHeaders: () => Promise<
  JobOfferHeader[]
> = async () => {
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

const isInvalidText = (text: string): boolean => !text || text.trim() === "";

export const submitSearchJobOffersForm = async (
  prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> => {
  const searchData = Object.fromEntries(formData) as { [k: string]: string };

  if (
    isInvalidText(searchData["searchText"]) &&
    isInvalidText(searchData["location"]) &&
    !searchData["fullTime"]
  ) {
    return { message: "Please fill at least one field !" };
  }

  redirect(
    `/searched-job-offers/${searchData["searchText"]}-${
      searchData["location"] ?? ""
    }-${searchData["fullTime"] ?? ""}`
  );
};
