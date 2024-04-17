import Link from "next/link";

import SwitchMode from "@/app/ui/common/SwitchMode";

const Header: React.FC<{
  children?: React.ReactNode;
  wrapperStyle?: string;
  className?: string;
}> = ({ children, wrapperStyle, className }) => {
  const wrapper: string = `flex justify-between items-center ${wrapperStyle}`;
  const headerStyle: string = `grid grid-rows-3 ${className}`;

  return (
    <header className={headerStyle}>
      <div
        className={`row-start-1 ${
          className ? "row-end-4" : "row-end-3"
        } col-start-1 col-end-2 bg-mobile-pattern-header md:bg-tablet-pattern-header lg:bg-desktop-pattern-header bg-no-repeat bg-cover p-5 lg:p-10 2xl:px-[10rem]`}
      >
        <div className={wrapper}>
          <h1 className="text-white">
            <Link href="/">devjobs</Link>
          </h1>
          <SwitchMode />
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
