import Image from "next/image";
import Link from "next/link";

import scootIcon from "@/public/logos/scoot.svg";

const JobOffer = () => {
  return (
    <article className="bg-white rounded-md px-8 pb-8 md:w-[21.188rem] md:h-[15.813rem]">
      <div
        style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
        className="w-[3.125rem] h-[3.125rem] rounded-2xl flex justify-center items-center translate-y-[-1.7rem]"
      >
        <Image src={scootIcon} alt="Scoot icon" />
      </div>
      <section className="flex flex-col justify-between gap-y-10">
        <div className="flex flex-col gap-y-5">
          <p className="text-dark-grey">5h ago . Full Time</p>
          <h3>Senior Software Engineer</h3>
          <p className="text-dark-grey">Scoot</p>
        </div>
        <Link href="/" className="text-violet font-bold">
          United Kingdom
        </Link>
      </section>
    </article>
  );
};

export default JobOffer;
