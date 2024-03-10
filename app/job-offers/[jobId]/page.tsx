"use client";

import Header from "@/app/ui/common/Header";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import ReduxProvider from "@/store/reduxProvider";
import OfferHeader from "@/app/ui/common/jobOffer/OfferHeader";
import OfferMain from "@/app/ui/common/jobOffer/OfferMain";
import OfferFooter from "@/app/ui/common/jobOffer/OfferFooter";

const JobOfferPage = () => {
  return (
    <ReduxProvider>
      <ModeWrapper>
        <Header className="h-[10rem]" />
        <OfferHeader />
        <OfferMain />
        <OfferFooter />
      </ModeWrapper>
    </ReduxProvider>
  );
};

export default JobOfferPage;
