import React from "react";

import { JobOfferHeader } from "@/models/JobOfferHeader";
import JobOfferItem from "./JobOfferItem";

const JobOfferList: React.FC<{ jobOffers: JobOfferHeader[] }> = ({
  jobOffers,
}) => {
  return (
    <ul className="flex flex-wrap md:gap-x-4">
      {jobOffers.map((jobOffer: JobOfferHeader) => (
        <li
          key={jobOffer.id}
          className="w-full md:w-[calc(50%-.5rem)] lg:w-[calc(33%-.5rem)] xl:w-[calc(25%-.8rem)]"
        >
          <JobOfferItem jobOffer={jobOffer} />
        </li>
      ))}
    </ul>
  );
};

export default JobOfferList;
