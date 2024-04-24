import React from "react";

import InputText from "@/app/ui/common/InputText";
import iconSearch from "@/public/desktop/icon-search.svg";
import iconLocation from "@/public/desktop/icon-location.svg";
import InputCheckbox from "@/app/ui/common/inputCheckbox/InputCheckbox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";

const DesktopInput: React.FC<{
  animatedSubmmit?: boolean;
  animatedSearchText?: boolean;
  animatedLocation?: boolean;
}> = ({ animatedSubmmit, animatedSearchText, animatedLocation }) => {
  return (
    <>
      <InputText
        src={iconSearch}
        alt="Search icon"
        name="searchText"
        placeholder="Filter by title, companies, expertise..."
        className="flex w-[30%]"
        animatedText="Senior Frontend Developer"
        delay={1.5}
        animated={animatedSearchText}
      />
      <InputText
        src={iconLocation}
        alt="Location icon"
        name="location"
        placeholder="Filter by location..."
        className="flex w-[30%]"
        animatedText=" Florida"
        delay={0.5}
        animated={animatedLocation}
      />
      <InputCheckbox
        name="fullTime"
        labelText="Full Time"
        className="flex min-w-[8rem]"
      />
      <PrimaryButton
        text="Search"
        className="flex"
        animated={animatedSubmmit}
      />
    </>
  );
};

export default DesktopInput;
