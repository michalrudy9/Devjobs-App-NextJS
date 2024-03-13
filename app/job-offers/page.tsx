"use client";

import Header from "@/app/ui/common/Header";
import SearchBox from "../ui/search-box/SearchBox";
import ReduxProvider from "@/store/reduxProvider";
import PrimaryButton from "../ui/common/buttons/PrimaryButton";
import ModeWrapper from "../ui/common/ModeWrapper";
import JobOfferList from "../ui/common/jobOffer/JobOfferList";

const JobOffersPage = () => {
  return (
    <ReduxProvider>
      <ModeWrapper>
        <Header>
          <SearchBox className="translate-y-16" />
        </Header>
        <main className="mt-[5rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
          <JobOfferList />
          <PrimaryButton text="Load More" className="my-10" />
        </main>
      </ModeWrapper>
    </ReduxProvider>
  );
};

export default JobOffersPage;
