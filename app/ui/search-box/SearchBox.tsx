"use client";

import React from "react";
import { useFormState } from "react-dom";
import { usePathname, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggle } from "@/store/modalSlice";
import FilterBox from "@/app/ui/search-box/FilterBox";
import { useWindowWidth } from "@/app/lib/useWindowWidth";
import MobileInputs from "@/app/ui/search-box/MobileInputs";
import DesktopInputs from "@/app/ui/search-box/DesktopInputs";
import { submitSearchJobOffersForm } from "@/app/lib/actions/filterJobOffersActions";
import ErrorBlock from "@/app/ui/common/ErrorBlock";
import {
  DataPath,
  getDataPath,
  removeSearchLabelItem,
} from "@/app/lib/actions/filterJobOffersActions";
import SearchLabel from "@/app/ui/search-box/SearchLabel";

const SearchBox: React.FC<{
  className?: string;
  errorWraper?: string;
  isAllJobOffers?: boolean;
}> = ({ className, errorWraper, isAllJobOffers }) => {
  const router = useRouter();
  const width = useWindowWidth();
  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing = useAppSelector((state) => state.modal.isShowing);
  const [state, formAction] = useFormState(submitSearchJobOffersForm, {
    message: "",
  });

  let path: string = "";
  let dataPath: DataPath[] = [];

  if (!isAllJobOffers) {
    path = usePathname();
    dataPath = getDataPath(path);
  }

  const closeModal = () => {
    setTimeout(() => {
      dispatch(toggle());
    }, 100);
  };

  const errorWraperStyle: string = `absolute ${errorWraper}`;

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-lg p-5 md:gap-x-5 flex justify-between items-center ${className}`;

  return (
    <section className="row-start-2 row-end-4 col-start-1 col-end-2">
      {isShowing && (
        <FilterBox
          onClose={() => {
            dispatch(toggle());
            document.body.style.overflow = "visible";
          }}
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
                  onClick={() => removeSearchLabelItem(item.id, path, router)}
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
