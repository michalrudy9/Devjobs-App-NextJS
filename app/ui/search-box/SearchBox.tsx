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
import {
  DataPath,
  getDataPath,
  removeSearchLabel,
} from "@/app/lib/actions/filterJobOffersActions";
import SearchLabel from "./SearchLabel";
import { usePathname } from "next/navigation";

const SearchBox: React.FC<{
  className?: string;
  errorWraper?: string;
}> = ({ className, errorWraper }) => {
  const width = useWindowWidth();
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing: boolean = useAppSelector((state) => state.modal.isShowing);
  const dispatch = useAppDispatch();
  const [state, formAction] = useFormState(submitSearchJobOffersForm, {
    message: "",
  });
  const path = usePathname();
  const dataPath: DataPath[] = getDataPath(path);

  const closeModal = () => {
    setTimeout(() => {
      dispatch(toggle());
    }, 100);
  };

  const errorWraperStyle: string = `absolute flex-row ${errorWraper}`;

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
      <div className={errorWraperStyle}>
        {state.message && (
          <ErrorBlock message={state.message} className="my-1" />
        )}
        <div className="flex gap-x-4 w-[calc(100%-2.5rem)]">
          {dataPath.map((item: DataPath) => {
            if (item.data !== "") {
              return (
                <SearchLabel
                  key={item.id}
                  text={item.data}
                  onClick={() => removeSearchLabel(item.id, path)}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
