import React from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggle } from "@/store/modalSlice";
import FilterBox from "./FilterBox";
import { useWindowWidth } from "@/app/lib/useWindowWidth";
import MobileInputs from "./MobileInputs";
import DesktopInputs from "./DesktopInputs";

const SearchBox: React.FC<{
  className?: string;
}> = ({ className }) => {
  const width = useWindowWidth();
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing: boolean = useAppSelector((state) => state.modal.isShowing);
  const dispatch = useAppDispatch();

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-lg p-5 md:gap-x-5 flex justify-between items-center ${className}`;

  return (
    <>
      {isShowing && <FilterBox onClose={() => dispatch(toggle())} />}
      <form className={style}>
        {width <= 768 && <MobileInputs />}
        {width > 768 && <DesktopInputs />}
      </form>
    </>
  );
};

export default SearchBox;
