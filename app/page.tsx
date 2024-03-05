import Link from "next/link";

import SearchBox from "./ui/search-box/SearchBox";

const Home = () => {
  return (
    <main className="bg-gray h-screen p-5">
      <header>
        <h1 className="text-violet text-4xl text-center my-10">
          <Link href="/">devjobs</Link>
        </h1>
      </header>
      <p className="text-center font-bold text-very-dark-blue text-5xl my-20">
        Find your dream job in IT
      </p>
      <SearchBox />
    </main>
  );
};

export default Home;
