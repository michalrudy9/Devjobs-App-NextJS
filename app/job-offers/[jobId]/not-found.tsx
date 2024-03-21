"use client";

import Link from "next/link";

import Header from "@/app/ui/common/Header";
import ModeWrapper from "@/app/ui/common/ModeWrapper";
import SecondaryButton from "@/app/ui/common/buttons/SecondaryButton";
import { useAppSelector } from "@/store/hooks";

const NotFound = () => {
  const isLightMode: boolean = useAppSelector((state) => state.mode.isLight);

  return (
    <ModeWrapper>
      <Header />
      <main className="mt-[7rem] px-5 lg:px-10 2xl:px-[10rem] text-center h-screen">
        <h1 className={isLightMode ? "text-light-violet" : "text-violet"}>
          Job offer not found
        </h1>
        <p className={isLightMode ? "my-6" : "text-white my-6"}>
          Unfortunately, we could not find the wanted job offer.
        </p>
        <Link href="/job-offers">
          <SecondaryButton text="Go to all job offers" />
        </Link>
      </main>
    </ModeWrapper>
  );
};

export default NotFound;
