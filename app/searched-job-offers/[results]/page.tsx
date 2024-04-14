"use client";

import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Header from "@/app/ui/common/Header";
import SearchBox from "@/app/ui/search-box/SearchBox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import JobOfferList from "@/app/ui/common/jobOffer/JobOfferList";
import {
  extractDataFromPath,
  fetchFilteredJobOffers,
} from "@/app/lib/actions/filterJobOffersActions";
import { JobOfferHeader } from "@/models/JobOfferHeader";

const JobOffersPage = () => {
  const path = usePathname();
  const extractedData = extractDataFromPath(path);

  const {
    data: jobOffers,
    isPending,
    isError,
    error,
  } = useQuery<JobOfferHeader[]>({
    queryKey: ["amountJobOffers"],
    queryFn: () => fetchFilteredJobOffers(extractedData),
  });

  return (
    <ModeWrapper>
      <Header wrapperStyle="translate-y-5">
        <SearchBox
          className="translate-y-16"
          errorWraper="w-[calc(100%-2.5rem)] lg:w-[calc(100%-5rem)] 2xl:w-[calc(100%-20rem)] mt-[4.25rem]"
        />
      </Header>
      <main className="mt-[7rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
        {isPending && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {!isPending && !isError && jobOffers.length < 1 && (
          <p>Nothing searched!</p>
        )}
        {!isPending && !isError && jobOffers.length > 0 && (
          <JobOfferList jobOffers={jobOffers} />
        )}
        <PrimaryButton text="Load More" className="my-10" />
      </main>
    </ModeWrapper>
  );
};

export default JobOffersPage;
