"use client";

import { notFound, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Alert } from "@mui/material";

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
    <ModeWrapper className={`${isError && "h-screen"}`}>
      <Header className="h-[10rem]" wrapperStyle="translate-y-5" />
      {isPending && (
        <>
          <OfferHeaderSkeleton />
          <OfferMainSkeleton />
        </>
      )}
      {isError && (
        <div className="h-[calc(100%-10rem)] flex justify-center items-center">
          <Alert severity="error">{error.message}</Alert>
        </div>
      )}
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
