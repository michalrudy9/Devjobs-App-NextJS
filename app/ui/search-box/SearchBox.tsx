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
import { submitSearchJobOffersForm } from "@/app/lib/actions";
import ErrorBlock from "@/app/ui/common/ErrorBlock";
import {
  DataPath,
  getDataPath,
  getNewPath,
} from "@/app/lib/actions/filterJobOffersActions";
import SearchLabel from "@/app/ui/search-box/SearchLabel";

const SearchBox: React.FC<{
  className?: string;
  errorWraper?: string;
  isAllJobOffers?: boolean;
}> = ({ className, errorWraper, isAllJobOffers }) => {
  const width = useWindowWidth();
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing: boolean = useAppSelector((state) => state.modal.isShowing);
  const dispatch = useAppDispatch();
  const [state, formAction] = useFormState(submitSearchJobOffersForm, {
    message: "",
  });
  const router = useRouter();

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

  const errorWraperStyle: string = `absolute flex-row ${errorWraper}`;

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-lg p-5 md:gap-x-5 flex justify-between items-center ${className}`;

  const removeSearchLabelHandler = (id: number, path: string) => {
    const newPath: string = getNewPath(id, path);
    router.push(newPath);
  };

  return (
    <section>
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
                  onClick={() => removeSearchLabelHandler(item.id, path)}
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
function useMediaQuery(arg0: number) {
  throw new Error("Function not implemented.");
}
