import Link from "next/link";

import SwitchMode from "./SwitchMode";

const Header: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const style: string = `bg-mobile-pattern-header md:bg-tablet-pattern-header lg:bg-desktop-pattern-header bg-no-repeat bg-cover p-5 lg:p-10 2xl:px-[10rem] ${className}`;

  return (
    <header className={style}>
      <div className="flex justify-between items-center translate-y-5">
        <h1 className="text-white">
          <Link href="/">devjobs</Link>
        </h1>
        <SwitchMode />
      </div>
      {/* provide context */}
      {children}
    </header>
  );
};

export default Header;
