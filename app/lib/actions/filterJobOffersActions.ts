import { JobOfferHeader } from "@/models/JobOfferHeader";
import { getAllJobOfferHeaders } from "../actions";

export const getDataPath = (path: string): string[] => {
  const elements = path.split("/");
  const data = elements[elements.length - 1];
  const searchedData: string[] = data
    .split("-")
    .map((item: string) => item.replace("%20", " "));

  return searchedData;
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
