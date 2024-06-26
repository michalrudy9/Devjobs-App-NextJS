"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import SearchBox from "@/app/ui/search-box/SearchBox";
import { fetchAmountOfJobOffers } from "@/app/lib/actions/actions";
import { AmountOffers } from "@/models/response/AmountOffers";
import AllJobOffersLink from "@/app/ui/common/AllJobOffersLink";

const HomePage = () => {
  const { data, isPending, isError } = useQuery<AmountOffers>({
    queryKey: ["amountJobOffers"],
    queryFn: fetchAmountOfJobOffers,
  });

  return (
    <main className="bg-mobile-pattern-header bg-no-repeat bg-cover h-screen p-5 lg:p-20">
      <header>
        <h1 className="text-light-grey text-4xl text-center lg:text-left my-10">
          <Link href="/">devjobs</Link>
        </h1>
      </header>
      <motion.p
        className="text-center lg:text-left font-bold text-very-dark-blue text-5xl my-20 leading-normal"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Find your dream job in IT
      </motion.p>
      <SearchBox
        errorWraper="w-[calc(100%-2.5rem)] lg:w-[calc(100%-10rem)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        animatedSubmmit
        animatedSearchText
        animatedLocation
      />
      <AllJobOffersLink isPending={isPending} isError={isError} data={data!} />
    </main>
  );
};

export default HomePage;
