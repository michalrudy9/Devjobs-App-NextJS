"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";

import Header from "@/app/ui/common/Header";
import SearchBox from "../ui/search-box/SearchBox";
import PrimaryButton from "../ui/common/buttons/PrimaryButton";
import ModeWrapper from "../ui/common/ModeWrapper";
import JobOfferList from "../ui/common/jobOffer/JobOfferList";
import { findJobOffers } from "../lib/actions";
import { JobOfferHeader } from "@/models/JobOfferHeader";

const SearchedJobOffers = async () => {
  const path = usePathname();
  const jobOffers: JobOfferHeader[] = await findJobOffers(path);

  return <JobOfferList jobOffers={jobOffers} />;
};

const JobOffersPage = () => {
  return (
    <ModeWrapper>
      <Header>
        <SearchBox className="translate-y-16" errorStyle="mt-[4.5rem]" />
      </Header>
      <main className="mt-[5rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
        <Suspense fallback={<p>Loading...</p>}>
          <SearchedJobOffers />
        </Suspense>
        <PrimaryButton text="Load More" className="my-10" />
      </main>
    </ModeWrapper>
  );
};

export default JobOffersPage;
