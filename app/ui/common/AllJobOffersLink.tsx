import React from "react";
import Link from "next/link";
import { Skeleton } from "@mui/material";

import { AmountOffers } from "@/models/response/AmountOffers";

const AllJobOffersLink: React.FC<{
  isPending: boolean;
  isError: boolean;
  data: AmountOffers;
}> = ({ isPending, isError, data }) => {
  return (
    <Link
      href="/job-offers"
      className="text-light-grey mt-[7rem] text-xl flex justify-center"
    >
      All job offers (
      {isPending && <Skeleton variant="text" sx={{ fontSize: "5rem" }} />}
      {isError && "all"}
      {!isPending && !isError && data.amount})
    </Link>
  );
};

export default AllJobOffersLink;
