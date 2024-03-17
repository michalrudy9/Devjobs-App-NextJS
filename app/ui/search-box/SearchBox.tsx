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

const SearchBox: React.FC<{
  className?: string;
}> = ({ className }) => {
  const width = useWindowWidth();
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing: boolean = useAppSelector((state) => state.modal.isShowing);
  const dispatch = useAppDispatch();
  const [state, formAction] = useFormState(submitSearchJobOffersForm, {
    message: "",
  });

  const closeModal = () => {
    setTimeout(() => {
      dispatch(toggle());
    }, 100);
  };

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-lg p-5 md:gap-x-5 flex justify-between items-center ${className}`;

  return (
    <>
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
      <p className="">{state.message}</p>
    </>
  );
};

export default SearchBox;
