import Link from "next/link";

import SwitchMode from "@/app/ui/common/SwitchMode";

const Header: React.FC<{
  children?: React.ReactNode;
  className?: string;
  wrapperStyle?: string;
}> = ({ children, className, wrapperStyle }) => {
  const style: string = `bg-mobile-pattern-header md:bg-tablet-pattern-header lg:bg-desktop-pattern-header bg-no-repeat bg-cover p-5 lg:p-10 2xl:px-[10rem] ${className}`;
  const wrapper: string = `flex justify-between items-center ${wrapperStyle}`;
  return (
    <header className={style}>
      <div className={wrapper}>
        <h1 className="text-white">
          <Link href="/">devjobs</Link>
        </h1>
        <SwitchMode />
      </div>
      {children}
    </header>
  );
};

export default Header;
