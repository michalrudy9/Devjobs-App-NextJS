import Link from "next/link";

import SearchBox from "@/app/ui/search-box/SearchBox";

const HomePage = () => {
  return (
    <main className="bg-mobile-pattern-header bg-no-repeat bg-cover h-screen p-5 lg:p-20">
      <header>
        <h1 className="text-light-grey text-4xl text-center lg:text-left my-10">
          <Link href="/">devjobs</Link>
        </h1>
      </header>
      <p className="text-center lg:text-left font-bold text-very-dark-blue text-5xl my-20 leading-normal">
        Find your dream job in IT
      </p>
      <SearchBox errorWraper="w-[calc(100%-2.5rem)] lg:w-[calc(100%-10rem)]" />
      <Link
        href="/job-offers"
        className="text-light-grey mt-[7rem] text-xl flex justify-center"
      >
        All job offers (58)
      </Link>
    </main>
  );
};

export default HomePage;
