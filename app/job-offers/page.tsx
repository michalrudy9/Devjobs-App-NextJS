"use client";

import { Suspense } from "react";

import Header from "@/app/ui/common/Header";
import SearchBox from "../ui/search-box/SearchBox";
import PrimaryButton from "../ui/common/buttons/PrimaryButton";
import ModeWrapper from "../ui/common/ModeWrapper";
import JobOfferList from "../ui/common/jobOffer/JobOfferList";
import { getAllJobOfferHeaders } from "../lib/actions";

const AllJobOffers = async () => {
  const allJobOffersHeader = await getAllJobOfferHeaders();
  return <JobOfferList jobOffers={allJobOffersHeader} />;
};

const JobOffersPage = () => {
  return (
    <ModeWrapper>
      <Header>
        <SearchBox className="translate-y-16" errorStyle="mt-[4.5rem]" />
      </Header>
      <main className="mt-[6rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
        <Suspense fallback={<p>Loading...</p>}>
          <AllJobOffers />
        </Suspense>
        <PrimaryButton text="Load More" className="my-10" />
      </main>
    </ModeWrapper>
  );
};

export default JobOffersPage;
