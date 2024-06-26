import Image from "next/image";
import Link from "next/link";

import { JobOfferHeader } from "@/models/JobOfferHeader";
import { useAppSelector } from "@/store/hooks";

const JobOfferItem: React.FC<{
  jobOffer: JobOfferHeader;
}> = ({ jobOffer }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-white text-black" : "bg-very-dark-blue text-white"
  } rounded-md px-8 pb-8 mt-14 md:h-[18rem] text-left`;

  const src: string = "https://devjobs-app-next-js.vercel.app/logos/" + jobOffer.logo + ".svg";

  return (
    <article className={style}>
      <div
        style={{ backgroundColor: jobOffer.logo_background }}
        className="w-[3.125rem] h-[3.125rem] rounded-2xl flex justify-center items-center translate-y-[-1.7rem]"
      >
        <Image
          src={src}
          alt={`${jobOffer.company} icon`}
          width={0}
          height={0}
          className="w-full p-3"
        />
      </div>
      <section className="h-[calc(100%-3.5rem)] flex flex-col justify-between ">
        <div className="flex flex-col gap-y-5">
          <p className="text-dark-grey">
            {jobOffer.posted_at} . {jobOffer.contract}
          </p>
          <h3 className="hover:text-dark-grey">
            <Link href={`/job-offers/${jobOffer.id}`}>{jobOffer.position}</Link>
          </h3>
          <p className="text-dark-grey">{jobOffer.company}</p>
        </div>
        <p className="text-violet font-bold">{jobOffer.location}</p>
      </section>
    </article>
  );
};

export default JobOfferItem;
