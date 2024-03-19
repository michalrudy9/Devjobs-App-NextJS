"use client";

import React from "react";
import { useFormState } from "react-dom";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggle } from "@/store/modalSlice";
import FilterBox from "./FilterBox";
import { useWindowWidth } from "@/app/lib/useWindowWidth";
import MobileInputs from "./MobileInputs";
import DesktopInputs from "./DesktopInputs";
import { submitSearchJobOffersForm } from "@/app/lib/actions";
import ErrorBlock from "../common/ErrorBlock";
import { getDataPath } from "@/app/lib/actions/filterJobOffersActions";
import SearchLabel from "./SearchLabel";
import { usePathname } from "next/navigation";

const SearchBox: React.FC<{
  className?: string;
  errorStyle?: string;
}> = ({ className, errorStyle }) => {
  const width = useWindowWidth();
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing: boolean = useAppSelector((state) => state.modal.isShowing);
  const dispatch = useAppDispatch();
  const [state, formAction] = useFormState(submitSearchJobOffersForm, {
    message: "",
  });
  const path = usePathname();
  const dataPath: string[] = getDataPath(path);

  const closeModal = () => {
    setTimeout(() => {
      dispatch(toggle());
    }, 100);
  };

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-lg p-5 md:gap-x-5 flex justify-between items-center ${className}`;

  return (
    <section className="">
      {isShowing && (
        <FilterBox
          onClose={() => dispatch(toggle())}
          closeAfterSubmit={closeModal}
        />
      )}
      <form action={formAction} className={style}>
        {width <= 768 && <MobileInputs />}
        {width > 768 && <DesktopInputs />}
      </form>
      <div className="absolute flex gap-x-4 w-[calc(100%-2.5rem)] mt-[4.5rem]">
        {state.message && (
          <ErrorBlock message={state.message} className={errorStyle} />
        )}
        {dataPath.map((item: string) => {
          if (item !== "") {
            return <SearchLabel key={item} text={item} />;
          }
        })}
      </div>
    </section>
  );
};

export default SearchBox;
