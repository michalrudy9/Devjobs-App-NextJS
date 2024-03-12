import Image from "next/image";
import Link from "next/link";

import { JobOfferHeader } from "@/models/JobOfferHeader";
import { useAppSelector } from "@/store/hooks";

const JobOfferItem: React.FC<{ jobOffer: JobOfferHeader }> = ({ jobOffer }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-white text-black" : "bg-very-dark-blue text-white"
  } rounded-md px-8 pb-8 mt-14 md:h-[18rem] text-left`;

  return (
    <article className={style}>
      <div
        style={{ backgroundColor: jobOffer.logoBackground }}
        className="w-[3.125rem] h-[3.125rem] rounded-2xl flex justify-center items-center translate-y-[-1.7rem]"
      >
        <Image
          src={jobOffer.logo}
          alt={`${jobOffer.company} icon`}
          width={30}
          height={30}
        />
      </div>
      <section className="h-[calc(100%-3.5rem)] flex flex-col justify-between ">
        <div className="flex flex-col gap-y-5">
          <p className="text-dark-grey">
            {jobOffer.postedAt} . {jobOffer.contract}
          </p>
          <h3 className="hover:text-dark-grey">
            <Link
              href={`/job-offers/${jobOffer.position.replaceAll(" ", "-")}`}
            >
              {jobOffer.position}
            </Link>
          </h3>
          <p className="text-dark-grey">{jobOffer.company}</p>
        </div>
        <p className="text-violet font-bold">{jobOffer.location}</p>
      </section>
    </article>
  );
};

export default JobOfferItem;
