import Link from "next/link";

import SearchBox from "../search-box/SearchBox";
import SwitchMode from "./SwitchMode";

const Header = () => {
  return (
    <header className="bg-mobile-pattern-header md:bg-tablet-pattern-header lg:bg-desktop-pattern-header bg-no-repeat bg-cover p-5 lg:p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-white">
          <Link href="/">devjobs</Link>
        </h1>
        <SwitchMode />
      </div>
      {/* provide context */}
      <SearchBox className="translate-y-16" />
    </header>
  );
};

export default Header;
