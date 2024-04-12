import React from "react";
import Image from "next/image";
import Link from "next/link";

import SecondaryButton from "@/app/ui/common/buttons/SecondaryButton";
import { useAppSelector } from "@/store/hooks";
import { JobOffer } from "@/models/JobOffer";

const OfferHeader: React.FC<{ jobOffer: JobOffer }> = ({ jobOffer }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const src: string = "http://localhost:3000/logos/" + jobOffer.logo + ".svg";

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue text-white"
  } mx-5 mb-5 rounded-md flex flex-col md:flex-row items-center px-7 pb-7 md:px-0 md:pb-0 -translate-y-4 md:-translate-y-10 lg:mx-auto lg:w-[45.625rem]`;

  return (
    <header className={style}>
      <div
        style={{ backgroundColor: jobOffer.logoBackground }}
        className="p-1 md:p-6 w-[3.125rem] h-[3.125rem] md:w-[8.75rem] md:h-[8.75rem] rounded-2xl md:rounded-none md:rounded-bl-md flex justify-center items-center translate-y-[-1.7rem] md:translate-y-0"
      >
        <Image
          src={src}
          alt={`${jobOffer.company} icon`}
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-[calc(100%-8.75rem)] text-center md:text-left md:flex md:justify-between md:items-center md:px-10">
        <div>
          <h4 className="text-xl">{jobOffer.company}</h4>
          <p className="text-dark-grey font-light mb-4">{jobOffer.website}</p>
        </div>
        <Link href={jobOffer.website}>
          <SecondaryButton text="Company Site" className="h-12" />
        </Link>
      </div>
    </header>
  );
};

export default OfferHeader;
