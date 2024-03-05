"use client";

import Link from "next/link";
import { useState } from "react";

import SearchBox from "./ui/search-box/SearchBox";
import FilterBox from "./ui/search-box/FilterBox";

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
      <main className="bg-gray h-screen p-5">
        <header>
          <h1 className="text-violet text-4xl text-center my-10">
            <Link href="/">devjobs</Link>
          </h1>
        </header>
        <p className="text-center font-bold text-very-dark-blue text-5xl my-20">
          Find your dream job in IT
        </p>
        <SearchBox onClick={startFiltering} />
      </main>
    </>
  );
};

export default Home;
