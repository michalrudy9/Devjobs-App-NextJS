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
    `/${searchData["searchText"]}-${searchData["location"] ?? ""}-${
      searchData["fullTime"] ?? ""
    }`
  );
};

export const findJobOffers = async (
  dataPath: string
): Promise<JobOfferHeader[]> => {
  const [searchString, locationString, fullTime] = dataPath.split("-");

  let searchText: string[] = searchString.split("%20");
  searchText[0] = searchText[0].split("/")[1];
  searchText = searchText.map((text: string) => text.toLowerCase());

  let location: string = locationString.replace("%20", " ").toLowerCase();

  const allJobOfferHeaders: JobOfferHeader[] = await getAllJobOfferHeaders();

  let searchedResults: JobOfferHeader[] = [];

  searchText.forEach((phrase: string) => {
    searchedResults.push(
      ...allJobOfferHeaders.filter((jobOfferItem: JobOfferHeader) =>
        jobOfferItem.position.toLowerCase().includes(phrase)
      )
    );
  });

  searchedResults = searchedResults.filter((jobOfferItem: JobOfferHeader) =>
    jobOfferItem.location.toLowerCase().includes(location)
  );

  if (fullTime) {
    searchedResults = searchedResults.filter(
      (jobOfferItem: JobOfferHeader) => jobOfferItem.contract === "Full Time"
    );
  }

  return searchedResults;
};
