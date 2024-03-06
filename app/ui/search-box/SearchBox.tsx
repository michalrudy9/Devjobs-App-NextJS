import React, { MouseEventHandler } from "react";

import iconFilter from "@/public/mobile/icon-filter.svg";
import iconSearch from "@/public/desktop/icon-search.svg";
import iconSearchWhite from "@/public/desktop/icon-search-white.svg";
import iconLocation from "@/public/desktop/icon-location.svg";
import ImageButton from "./ImageButton";
import InputText from "../common/InputText";
import InputCheckbox from "../common/InputCheckbox";
import PrimaryButton from "../common/PrimaryButton";

const SearchBox: React.FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => {
  return (
    <>
      <form className="bg-white rounded-lg p-5 md:gap-x-5 flex justify-between items-center">
        <input
          type="text"
          name="searchTextMobile"
          placeholder="Filter by title..."
          className="outline-none md:hidden"
        />
        <div className="flex gap-x-5 justify-center items-center md:hidden">
          <ImageButton src={iconFilter} alt="Filter icon" onClick={onClick} />
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
          className="!hidden md:!flex"
        />
        <PrimaryButton text="Search" className="hidden md:flex" />
      </form>
    </>
  );
};

export default SearchBox;
