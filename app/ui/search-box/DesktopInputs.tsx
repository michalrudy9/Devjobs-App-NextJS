import InputText from "../common/InputText";
import iconSearch from "@/public/desktop/icon-search.svg";
import iconLocation from "@/public/desktop/icon-location.svg";
import InputCheckbox from "../common/inputCheckbox/InputCheckbox";
import PrimaryButton from "../common/buttons/PrimaryButton";

const DesktopInput = () => {
  return (
    <>
      <InputText
        src={iconSearch}
        alt="Search icon"
        name="searchText"
        placeholder="Filter by title, companies, expertise..."
        className="flex w-[30%]"
      />
      <InputText
        src={iconLocation}
        alt="Location icon"
        name="location"
        placeholder="Filter by location..."
        className="flex w-[30%]"
      />
      <InputCheckbox
        name="fullTime"
        labelText="Full Time"
        className="flex min-w-[8rem]"
      />
      <PrimaryButton text="Search" className="flex" />
    </>
  );
};

export default DesktopInput;
