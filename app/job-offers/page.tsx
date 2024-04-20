"use client";

import { useQuery } from "@tanstack/react-query";
import { Alert } from "@mui/material";

import Header from "@/app/ui/common/Header";
import SearchBox from "@/app/ui/search-box/SearchBox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import JobOfferList from "@/app/ui/common/jobOffer/JobOfferList";
import { fetchJobOfferHeaders } from "@/app/lib/actions/jobOffersActions";
import JobOfferSkeletonList from "@/app/ui/common/loading/JobOfferSkeletonList";

const JobOffersPage = () => {
  const {
    data: jobOffers,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobOffers"],
    queryFn: fetchJobOfferHeaders,
  });

  return (
    <ModeWrapper className={`${isError && "h-screen"}`}>
      <Header>
        <SearchBox
          className="m-5"
          errorWraper="w-full px-5 lg:px-5 2xl:px-[10rem]"
          isAllJobOffers={true}
        />
      </Header>
      <main
        className={`${
          !isError
            ? "mt-[5rem]"
            : "h-[calc(100%-12.188rem)] flex justify-center items-center"
        } px-5 lg:px-10 2xl:px-[10rem] text-center`}
      >
        {isPending && <JobOfferSkeletonList />}
        {isError && <Alert severity="error">{error.message}</Alert>}
        {!isPending && !isError && (
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
