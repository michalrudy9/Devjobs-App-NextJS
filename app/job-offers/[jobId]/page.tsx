import Link from "next/link";

import Header from "@/app/ui/common/Header";
import SecondaryButton from "@/app/ui/common/buttons/SecondaryButton";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";

const JobOffer = () => {
  return (
    <>
      <Header className="h-[10rem]" />
      <header className="bg-white mx-5 mb-5 rounded-md flex flex-col md:flex-row items-center px-7 pb-7 md:px-0 md:pb-0 -translate-y-4 md:-translate-y-10 lg:mx-auto lg:w-[45.625rem]">
        <div
          style={{ backgroundColor: "orange" }}
          className="w-[3.125rem] h-[3.125rem] md:w-[8.75rem] md:h-[8.75rem] rounded-2xl md:rounded-none md:rounded-bl-md flex justify-center items-center translate-y-[-1.7rem] md:translate-y-0"
        >
          {/* <Image src={} alt="Scoot icon" width={} height={} /> */}
        </div>
        <div className="md:w-[calc(100%-8.75rem)] text-center md:text-left md:flex md:justify-between md:items-center md:px-10">
          <div>
            <h4 className="text-xl">Scoot</h4>
            <p className="text-dark-grey font-light mb-4">scoot.com</p>
          </div>
          <SecondaryButton text="Company Site" className="h-12" />
        </div>
      </header>
      <main className="bg-white m-5 font-light text-dark-grey rounded-md p-5 pt-9 lg:mx-auto lg:w-[45.625rem]">
        <header className="flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between md:items-center">
          <div className="flex flex-col gap-y-2">
            <p>1w ago . Part Time</p>
            <h1 className="text-2xl text-black">Senior Software Engineer</h1>
            <Link href="/" className="text-violet font-bold w-full">
              United Kinghdom
            </Link>
          </div>
          <PrimaryButton text="Applay Now" className="h-12 w-full md:w-auto" />
        </header>
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
          sed, urna.
        </p>
        <h2 className="mt-16 mb-10 text-black">Requirements</h2>
        <p>
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
          vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
          vulputate vel, nisl.
        </p>
        <ul className="list-disc ps-[.9rem] my-8 marker:text-violet">
          <li className="ps-6 pb-2">Morbi interdum mollis sapien. Sed</li>
          <li className="ps-6 pb-2">
            Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
            risus
          </li>
          <li className="ps-6 pb-2">
            Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
            tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
          </li>
          <li className="ps-6 pb-2">Morbi interdum mollis sapien. Sed</li>
        </ul>
        <h2 className="mb-10 text-black">What You Will Do</h2>
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>
        <ol className="list-decimal ps-[.9rem] my-8 marker:text-violet marker:font-bold">
          <li className="ps-6 pb-2">Morbi interdum mollis sapien. Sed</li>
          <li className="ps-6 pb-2">
            Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
            risus
          </li>
          <li className="ps-6 pb-2">
            Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
            tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
          </li>
          <li className="ps-6 pb-2">Morbi interdum mollis sapien. Sed</li>
        </ol>
      </main>
      <footer className="bg-white rounded-md p-5 mt-16">
        <div className="md:flex md:justify-between md:items-center lg:mx-auto lg:w-[45.625rem]">
          <div className="hidden md:block">
            <h4 className="text-2xl">Senior Software Engineer</h4>
            <p className="text-gray font-light">So Digital Inc.</p>
          </div>
          <PrimaryButton
            text="Apply Now"
            className="w-full md:w-auto md:h-12"
          />
        </div>
      </footer>
    </>
  );
};

export default JobOffer;
