"use client";

import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Header from "@/app/ui/common/Header";
import SearchBox from "@/app/ui/search-box/SearchBox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import JobOfferList from "@/app/ui/common/jobOffer/JobOfferList";
import { JobOfferHeader } from "@/models/JobOfferHeader";
import JobOfferSkeletonList from "@/app/ui/common/loading/JobOfferSkeletonList";
import {
  extractDataFromPath,
  fetchFilteredJobOffers,
} from "@/app/lib/actions/filterJobOffersActions";

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
      <Header>
        <SearchBox
          className="m-5"
          errorWraper="w-full px-5 lg:px-5 2xl:px-[10rem]"
        />
      </Header>
      <main className="mt-[5rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
        {isPending && <JobOfferSkeletonList />}
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
