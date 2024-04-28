import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ImageButton from "@/app/ui/search-box/ImageButton";
import iconSearchWhite from "@/public/desktop/icon-search-white.svg";
import iconFilter from "@/public/mobile/icon-filter.svg";
import { toggle } from "@/store/modalSlice";
import InputText from "@/app/ui/common/InputText";
import React from "react";

const MobileInputs: React.FC<{
  animatedSearchText?: boolean;
}> = ({ animatedSearchText }) => {
  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const searchTextMobileStyle: string = `${
    !isLightMode && "bg-very-dark-blue text-white"
  } outline-none`;

  return (
    <>
      <InputText
        name="searchText"
        placeholder="Filter by title..."
        className={searchTextMobileStyle}
        animatedText="Frontend Developer"
        delay={1.5}
        animated={animatedSearchText}
        animationTime={2.5}
        replaceAfterTime={3}
      />
      <div id="modal"></div>
      <div className="flex gap-x-5 justify-center items-center">
        <ImageButton
          src={iconFilter}
          alt="Filter icon"
          type="button"
          onClick={() => {
            dispatch(toggle());
            document.body.style.overflow = "hidden";
          }}
          animateStyle="secondary"
        />
        <ImageButton
          src={iconSearchWhite}
          alt="Search icon"
          type="submit"
          className="bg-violet rounded-md hover:bg-light-violet"
          animateStyle="primary"
        />
      </div>
    </>
  );
};

export default MobileInputs;
