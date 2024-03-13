"use client";

import { usePathname } from "next/navigation";

import Header from "@/app/ui/common/Header";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import ReduxProvider from "@/store/reduxProvider";
import OfferHeader from "@/app/ui/common/jobOffer/OfferHeader";
import OfferMain from "@/app/ui/common/jobOffer/OfferMain";
import OfferFooter from "@/app/ui/common/jobOffer/OfferFooter";
import { getJobOffer } from "@/app/lib/actions";

const JobOfferPage = () => {
  const path = usePathname();
  const jobOffer = getJobOffer(path);

  return (
    <ReduxProvider>
      <ModeWrapper>
        <Header className="h-[10rem]" />
        <OfferHeader
          logo={jobOffer!.logo}
          company={jobOffer!.company}
          website={jobOffer!.website}
          bgColor={jobOffer!.logoBackground}
        />
        <OfferMain jobOffer={jobOffer!} />
        <OfferFooter position={jobOffer!.position} applay={jobOffer!.apply} />
      </ModeWrapper>
    </ReduxProvider>
  );
};

export default JobOfferPage;
