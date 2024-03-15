import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ImageButton from "./ImageButton";
import iconSearchWhite from "@/public/desktop/icon-search-white.svg";
import iconFilter from "@/public/mobile/icon-filter.svg";
import { toggle } from "@/store/modalSlice";

const MobileInputs = () => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const dispatch = useAppDispatch();

  const searchTextMobileStyle: string = `${
    !isLightMode && "bg-very-dark-blue text-white"
  } outline-none`;

  return (
    <>
      <input
        type="text"
        name="searchText"
        placeholder="Filter by title..."
        className={searchTextMobileStyle}
      />
      <div id="modal"></div>
      <div className="flex gap-x-5 justify-center items-center">
        <ImageButton
          src={iconFilter}
          alt="Filter icon"
          type="button"
          onClick={() => dispatch(toggle())}
        />
        <ImageButton
          src={iconSearchWhite}
          alt="Search icon"
          type="submit"
          className="bg-violet rounded-md hover:bg-light-violet"
        />
      </div>
    </>
  );
};

export default MobileInputs;
