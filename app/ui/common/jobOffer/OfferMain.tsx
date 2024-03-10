import Link from "next/link";

import { useAppSelector } from "@/store/hooks";
import PrimaryButton from "../buttons/PrimaryButton";

const OfferMain = () => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  }  m-5 font-light text-dark-grey rounded-md p-5 pt-9 lg:mx-auto lg:p-12 lg:w-[45.625rem]`;

  return (
    <main className={style}>
      <header className="flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between md:items-center">
        <div className="flex flex-col gap-y-2">
          <p>1w ago . Part Time</p>
          <h1
            className={isLightMode ? "text-black" : "text-white" + " text-2xl"}
          >
            Senior Software Engineer
          </h1>
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
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
        dapibus eu, fermentum et, dapibus sed, urna.
      </p>
      <h2
        className={isLightMode ? "text-black" : "text-white" + " mt-16 mb-10"}
      >
        Requirements
      </h2>
      <p>
        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
        ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
        dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
        adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
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
      <h2 className={isLightMode ? "text-black" : "text-white" + " mb-10"}>
        What You Will Do
      </h2>
      <p>
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
        Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
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
  );
};

export default OfferMain;
