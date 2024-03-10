"use client";

import Link from "next/link";

import SearchBox from "./ui/search-box/SearchBox";
import ReduxProvider from "@/store/reduxProvider";

const HomePage = () => {
  return (
    <ReduxProvider>
      <main className="bg-mobile-pattern-header bg-no-repeat bg-cover h-screen p-5 lg:p-20">
        <header>
          <h1 className="text-light-grey text-4xl text-center lg:text-left my-10">
            <Link href="/">devjobs</Link>
          </h1>
        </header>
        <p className="text-center lg:text-left font-bold text-very-dark-blue text-5xl my-20 leading-normal">
          Find your dream job in IT
        </p>
        <SearchBox />
        <Link
          href="/job-offers"
          className="text-light-grey mt-[7rem] text-xl flex justify-center"
        >
          All job offers (58)
        </Link>
      </main>
    </ReduxProvider>
  );
};

export default HomePage;
