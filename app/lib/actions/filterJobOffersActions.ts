import { redirect } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { JobOfferHeader } from "@/models/JobOfferHeader";
import { FilterData } from "@/models/FilterData";

export type DataPath = {
  id: number;
  data: string;
};

export const extractDataFromPath = (path: string): FilterData => {
  const splitedDataPath = path.split("/");
  path = "/" + splitedDataPath[splitedDataPath.length - 1];

  const [searchString, locationString, fullTime] = path.split("-");

  let searchText: string[] = searchString.split("%20");
  searchText[0] = searchText[0].split("/")[1];
  searchText = searchText.map((text: string) => text.toLowerCase());

  let location: string = locationString.replace("%20", " ").toLowerCase();

  return { searchText, location, fullTime };
};

export const fetchFilteredJobOffers = async (
  filterData: FilterData
): Promise<JobOfferHeader[]> => {
  const response = await fetch("/api/searched-job-offers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filterData),
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching searched job offers!");
  }

  const data = (await response.json()) as JobOfferHeader[];
  return data;
};

// SearchBox

const extractData = (path: string) => {
  const pathElements = path.split("/");
  const subPath = pathElements[pathElements.length - 1];
  const subPathElements = subPath
    .split("-")
    .map((item: string) => item.replace("%20", " "));
  return subPathElements;
};

export const getDataPath = (path: string): DataPath[] => {
  const extractedDataPatch = extractData(path);
  return [
    { id: 0, data: extractedDataPatch[0] ?? "" },
    { id: 1, data: extractedDataPatch[1] ?? "" },
    { id: 2, data: extractedDataPatch[2] ?? "" },
  ];
};

const getNewPath = (id: number, path: string): string => {
  const extractedDataPatch: string[] = extractData(path);
  extractedDataPatch[id] = "";
  return `/searched-job-offers/${extractedDataPatch[0] ?? ""}-${
    extractedDataPatch[1] ?? ""
  }-${extractedDataPatch[2] ?? ""}`;
};

export const removeSearchLabelItem = (
  id: number,
  path: string,
  router: AppRouterInstance
) => {
  const newPath: string = getNewPath(id, path);
  router.push(newPath);
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
