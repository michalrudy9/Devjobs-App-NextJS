"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";

import Header from "@/app/ui/common/Header";
import SearchBox from "@/app/ui/search-box/SearchBox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import JobOfferList from "@/app/ui/common/jobOffer/JobOfferList";
import { findJobOffers } from "@/app/lib/actions/filterJobOffersActions";
import { JobOfferHeader } from "@/models/JobOfferHeader";

const SearchedJobOffers = async () => {
  const path = usePathname();
  const jobOffers: JobOfferHeader[] = await findJobOffers(path);

  return <JobOfferList jobOffers={jobOffers} imagePath="../" />;
};

const JobOffersPage = () => {
  return (
    <ModeWrapper>
      <Header>
        <SearchBox
          className="translate-y-16"
          errorWraper="w-[calc(100%-2.5rem)] lg:w-[calc(100%-5rem)] 2xl:w-[calc(100%-20rem)] mt-[4.25rem]"
        />
      </Header>
      <main className="mt-[7rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
        <Suspense fallback={<p>Loading...</p>}>
          <SearchedJobOffers />
        </Suspense>
        <PrimaryButton text="Load More" className="my-10" />
      </main>
    </ModeWrapper>
  );
};

export default JobOffersPage;
