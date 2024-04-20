"use client";

import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Alert } from "@mui/material";

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

  let modeWrapperStyle = "";
  let mainStyle = "mt-[5rem] px-5 lg:px-10 2xl:px-[10rem] text-center";

  if (isError) {
    modeWrapperStyle = "h-screen";
    mainStyle += " h-[calc(100%-17.188rem)] flex justify-center items-center";
  }

  if (!isPending && !isError && jobOffers.length < 1) {
    modeWrapperStyle = "h-screen";
    mainStyle += " h-[calc(100%-17.188rem)] flex justify-center items-center";
  }

  return (
    <ModeWrapper className={modeWrapperStyle}>
      <Header>
        <SearchBox
          className="m-5"
          errorWraper="w-full px-5 lg:px-5 2xl:px-[10rem]"
        />
      </Header>
      <main className={mainStyle}>
        {isPending && <JobOfferSkeletonList />}
        {isError && <Alert severity="error">{error.message}</Alert>}
        {!isPending && !isError && jobOffers.length < 1 && (
          <Alert severity="info">Nothing searched!</Alert>
        )}
        {!isPending && !isError && jobOffers.length > 0 && (
          <>
            <JobOfferList jobOffers={jobOffers} />
            <PrimaryButton text="Load More" className="my-10" />
          </>
        )}
      </main>
    </ModeWrapper>
  );
};

export default JobOffersPage;
