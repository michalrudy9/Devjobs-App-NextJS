import Link from "next/link";
import React from "react";

import { useAppSelector } from "@/store/hooks";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import { JobOffer } from "@/models/JobOffer";

const OfferMain: React.FC<{
  jobOffer: JobOffer;
}> = ({ jobOffer }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  }  m-5 font-light text-dark-grey rounded-md p-5 pt-9 lg:mx-auto lg:p-12 lg:w-[45.625rem]`;

  return (
    <main className={style}>
      <header className="flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between md:items-center">
        <div className="flex flex-col gap-y-2">
          <p>
            {jobOffer.postedAt} . {jobOffer.contract}
          </p>
          <h1
            className={isLightMode ? "text-black" : "text-white" + " text-2xl"}
          >
            {jobOffer.position}
          </h1>
          <span className="text-violet font-bold w-full">
            {jobOffer.location}
          </span>
        </div>
        <Link href={jobOffer.apply}>
          <PrimaryButton text="Applay Now" className="h-12 w-full md:w-auto" />
        </Link>
      </header>
      <p className="mt-10">{jobOffer.description}</p>
      <h2
        className={`${isLightMode ? "text-black" : "text-white"} mt-16 mb-10`}
      >
        Requirements
      </h2>
      <p>{jobOffer.requirements.content}</p>
      <ul className="list-disc ps-[.9rem] my-8 marker:text-violet">
        {jobOffer.requirements.items.map((item: string) => (
          <li key={item} className="ps-6 pb-2">
            {item}
          </li>
        ))}
      </ul>
      <h2 className={`${isLightMode ? "text-black" : "text-white"} mb-10`}>
        What You Will Do
      </h2>
      <p>{jobOffer.role.content}</p>
      <ol className="list-decimal ps-[.9rem] my-8 marker:text-violet marker:font-bold">
        {jobOffer.role.items.map((item: string) => (
          <li key={item} className="ps-6 pb-2">
            {item}
          </li>
        ))}
      </ol>
    </main>
  );
};

export default OfferMain;
