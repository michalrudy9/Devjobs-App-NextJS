import { JobOfferHeader } from "@/models/JobOfferHeader";
import { getAllJobOfferHeaders } from "../actions";

export type DataPath = {
  id: number;
  data: string;
};

const extractDataFromPath = (path: string) => {
  const pathElements = path.split("/");
  const subPath = pathElements[pathElements.length - 1];
  const subPathElements = subPath
    .split("-")
    .map((item: string) => item.replace("%20", " "));
  return subPathElements;
};

export const getDataPath = (path: string): DataPath[] => {
  const extractedDataPatch = extractDataFromPath(path);
  return [
    { id: 0, data: extractedDataPatch[0] ?? "" },
    { id: 1, data: extractedDataPatch[1] ?? "" },
    { id: 2, data: extractedDataPatch[2] ?? "" },
  ];
};

export const findJobOffers = async (
  dataPath: string
): Promise<JobOfferHeader[]> => {
  const splitedDataPath = dataPath.split("/");
  dataPath = "/" + splitedDataPath[splitedDataPath.length - 1];

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

export const getNewPath = (id: number, path: string): string => {
  const extractedDataPatch: string[] = extractDataFromPath(path);
  extractedDataPatch[id] = "";
  return `/searched-job-offers/${extractedDataPatch[0] ?? ""}-${
    extractedDataPatch[1] ?? ""
  }-${extractedDataPatch[2] ?? ""}`;
};
