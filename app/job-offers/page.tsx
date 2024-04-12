"use client";

import Header from "@/app/ui/common/Header";
import SearchBox from "@/app/ui/search-box/SearchBox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import JobOfferList from "@/app/ui/common/jobOffer/JobOfferList";
import { useQuery } from "@tanstack/react-query";
import { fetchJobOfferHeaders } from "@/app/lib/actions/jobOffersActions";

const JobOffersPage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["jobOffers"],
    queryFn: fetchJobOfferHeaders,
  });

  return (
    <ModeWrapper>
      <Header wrapperStyle="translate-y-5">
        <SearchBox
          className="translate-y-16"
          errorWraper="w-[calc(100%-2.5rem)] lg:w-[calc(100%-5rem)] 2xl:w-[calc(100%-20rem)] mt-[4.25rem]"
          isAllJobOffers={true}
        />
      </Header>
      <main className="mt-[7rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
        {isPending && <p>Loading...</p>}
        {isError ? <p>{error.message}</p> : undefined}
        {!isPending && !isError && <JobOfferList jobOffers={data} />}
        <PrimaryButton text="Load More" className="my-10" />
      </main>
    </ModeWrapper>
  );
};

export default JobOffersPage;
