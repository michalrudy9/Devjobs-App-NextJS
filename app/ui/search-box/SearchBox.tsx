import React from "react";

import iconFilter from "@/public/mobile/icon-filter.svg";
import iconSearch from "@/public/desktop/icon-search.svg";
import iconSearchWhite from "@/public/desktop/icon-search-white.svg";
import iconLocation from "@/public/desktop/icon-location.svg";
import ImageButton from "./ImageButton";
import InputText from "../common/InputText";
import InputCheckbox from "../common/inputCheckbox/InputCheckbox";
import PrimaryButton from "../common/buttons/PrimaryButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggle } from "@/store/modalSlice";
import FilterBox from "./FilterBox";

const SearchBox: React.FC<{
  className?: string;
}> = ({ className }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const isShowing: boolean = useAppSelector((state) => state.modal.isShowing);
  const dispatch = useAppDispatch();

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } rounded-lg p-5 md:gap-x-5 flex justify-between items-center ${className}`;
  const searchTextMobileStyle: string = `${
    !isLightMode && "bg-very-dark-blue text-white"
  } outline-none md:hidden`;

  return (
    <>
      {isShowing && <FilterBox onClose={() => dispatch(toggle())} />}
      <form className={style}>
        <input
          type="text"
          name="searchTextMobile"
          placeholder="Filter by title..."
          className={searchTextMobileStyle}
        />
        <div className="flex gap-x-5 justify-center items-center md:hidden">
          <ImageButton
            src={iconFilter}
            alt="Filter icon"
            onClick={() => dispatch(toggle())}
          />
          <ImageButton
            src={iconSearchWhite}
            alt="Search icon"
            className="bg-violet rounded-md hover:bg-light-violet"
          />
        </div>
        <InputText
          src={iconSearch}
          alt="Search icon"
          name="searchText"
          placeholder="Filter by title, companies, expertise..."
          className="hidden md:flex w-[30%]"
        />
        <InputText
          src={iconLocation}
          alt="Location icon"
          name="location"
          placeholder="Filter by location..."
          className="hidden md:flex w-[30%]"
        />
        <InputCheckbox
          name="fullTime"
          labelText="Full Time"
          className="!hidden md:!flex md:min-w-[8rem]"
        />
        <PrimaryButton text="Search" className="hidden md:flex" />
      </form>
    </>
  );
};

export default SearchBox;
