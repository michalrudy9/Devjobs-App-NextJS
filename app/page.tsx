"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import SearchBox from "./ui/search-box/SearchBox";
import FilterBox from "./ui/search-box/FilterBox";
import bgPatternHeader from "@/public/mobile/bg-pattern-header.svg";

const Home = () => {
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const startFiltering: () => void = () => {
    setIsFiltering(true);
  };

  const closeHandler: () => void = () => {
    setIsFiltering(false);
  };

  return (
    <>
      {isFiltering && <FilterBox onClose={closeHandler} />}
      <div className="grid grid-cols-1 grid-rows-1">
        <Image
          src={bgPatternHeader}
          alt="Page background"
          className="col-start-1 col-end-2 row-start-1 row-end-2 w-auto h-screen"
        />
        <main className="col-start-1 col-end-2 row-start-1 row-end-2 h-screen p-5 lg:p-20">
          <header>
            <h1 className="text-light-grey text-4xl text-center lg:text-left my-10">
              <Link href="/">devjobs</Link>
            </h1>
          </header>
          <p className="text-center lg:text-left font-bold text-very-dark-blue text-5xl my-20 leading-normal">
            Find your dream job in IT
          </p>
          <SearchBox onClick={startFiltering} />
          <Link
            href="/"
            className="text-light-grey mt-[7rem] text-xl flex justify-center"
          >
            All job offers (58)
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;
