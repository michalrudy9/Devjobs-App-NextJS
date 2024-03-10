"use client";

import Header from "@/app/ui/common/Header";
import SearchBox from "../ui/search-box/SearchBox";
import ReduxProvider from "@/store/reduxProvider";
import PrimaryButton from "../ui/common/buttons/PrimaryButton";
import ModeWrapper from "../ui/common/ModeWrapper";
import JobOfferItem from "../ui/common/JobOfferItem";

const JobOffersPage = () => {
  return (
    <ReduxProvider>
      <ModeWrapper>
        <Header>
          <SearchBox className="translate-y-16" />
        </Header>
        <main className="mt-[5rem] px-5 lg:px-10 2xl:px-[10rem] text-center">
          <ul className="flex flex-wrap md:gap-x-4">
            {DUMMY_DATA.map((offer) => (
              <li
                key={offer.id}
                className="w-full md:w-[calc(50%-.5rem)] lg:w-[calc(33%-.5rem)] xl:w-[calc(25%-.8rem)]"
              >
                <JobOfferItem />
              </li>
            ))}
          </ul>
          <PrimaryButton text="Load More" className="my-10" />
        </main>
      </ModeWrapper>
    </ReduxProvider>
  );
};

export default JobOffersPage;
