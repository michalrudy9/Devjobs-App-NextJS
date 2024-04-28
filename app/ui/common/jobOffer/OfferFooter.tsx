import Link from "next/link";
import React from "react";

import { useAppSelector } from "@/store/hooks";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";

const OfferFooter: React.FC<{
  position: string;
  applay: string;
}> = ({ position, applay }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-md p-5 mt-16`;

  return (
    <footer className={style}>
      <div className="md:flex md:justify-between md:items-center lg:mx-auto lg:w-[45.625rem]">
        <div className="hidden md:block">
          <h4
            className={isLightMode ? "text-black" : "text-white" + " text-2xl"}
          >
            {position}
          </h4>
          <p className="text-gray font-light">So Digital Inc.</p>
        </div>
        <Link href={applay}>
          <PrimaryButton
            text="Apply Now"
            className="w-full md:w-auto md:h-12"
            animated
          />
        </Link>
      </div>
    </footer>
  );
};

export default OfferFooter;
