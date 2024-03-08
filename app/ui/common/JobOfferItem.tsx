import Image from "next/image";
import Link from "next/link";

const JobOfferItem = () => {
  return (
    <article className="bg-white rounded-md px-8 pb-8 mt-14 md:h-[18rem]">
      <div
        style={{ backgroundColor: "" }}
        className="w-[3.125rem] h-[3.125rem] rounded-2xl flex justify-center items-center translate-y-[-1.7rem]"
      >
        {/* <Image src={} alt="Scoot icon" width={} height={} /> */}
      </div>
      <section className="h-[calc(100%-3.5rem)] flex flex-col justify-between ">
        <div className="flex flex-col gap-y-5">
          <p className="text-dark-grey">
            {} . {}
          </p>
          <h3>{}</h3>
          <p className="text-dark-grey">{}</p>
        </div>
        <Link href="/" className="text-violet font-bold">
          {}
        </Link>
      </section>
    </article>
  );
};

export default JobOfferItem;
