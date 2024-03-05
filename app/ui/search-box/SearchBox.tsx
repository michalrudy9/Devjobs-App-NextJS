import iconFilter from "@/public/mobile/icon-filter.svg";
import iconSearchWhite from "@/public/desktop/icon-search-white.svg";
import ImageButton from "./ImageButton";
import FilterModal from "./FilterModal";

const SearchBox = () => {
  return (
    <>
      <form className="bg-white rounded-lg p-5 flex justify-between items-center">
        <input
          type="text"
          name="searchText"
          placeholder="Filter by title..."
          className="outline-none"
        />
        <div className="flex gap-x-5 justify-center items-center">
          <ImageButton src={iconFilter} alt="Filter icon" />
          <ImageButton
            src={iconSearchWhite}
            alt="Search icon"
            className="bg-violet rounded-md hover:bg-light-violet"
          />
        </div>
      </form>
      
    </>
  );
};

export default SearchBox;
