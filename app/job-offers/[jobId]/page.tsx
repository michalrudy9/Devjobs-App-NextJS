"use client";

import { notFound, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Header from "@/app/ui/common/Header";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import OfferHeader from "@/app/ui/common/jobOffer/OfferHeader";
import OfferMain from "@/app/ui/common/jobOffer/OfferMain";
import OfferFooter from "@/app/ui/common/jobOffer/OfferFooter";
import OfferHeaderSkeleton from "@/app/ui/common/loading/OfferHeaderSkeleton";
import {
  extractId,
  fetchJobOffer,
} from "@/app/lib/actions/jobOfferDetailsActions";
import OfferMainSkeleton from "@/app/ui/common/loading/OfferMainSkeleton";

const JobOfferPage = () => {
  const path = usePathname();
  const extractedId = extractId(path);

  if (isNaN(extractedId)) {
    notFound();
  }

  const {
    data: jobOffer,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobOffer"],
    queryFn: () => fetchJobOffer(extractedId),
  });

  return (
    <ModeWrapper>
      <Header className="h-[10rem]" wrapperStyle="translate-y-5" />
      {isPending && (
        <>
          <OfferHeaderSkeleton />
          <OfferMainSkeleton />
        </>
      )}
      {isError && <p>{error.message}</p>}
      {!isPending && !isError && (
        <>
          <OfferHeader jobOffer={jobOffer} />
          <OfferMain jobOffer={jobOffer} />
          <OfferFooter position={jobOffer.position} applay={jobOffer.apply} />
        </>
      )}
    </ModeWrapper>
  );
};

export default JobOfferPage;
