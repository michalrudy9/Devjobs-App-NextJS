import { JobOffer } from "@/models/JobOffer";

export const extractId = (text: string): number => {
  const elements = text.split("/");
  const id = parseInt(elements[elements.length - 1]);
  return id;
};

export const fetchJobOffer = async (id: number) => {
  const response = await fetch("/api/selected-job-offer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching selected job offer!");
  }

  const data = (await response.json()) as JobOffer;
  return data;
};
