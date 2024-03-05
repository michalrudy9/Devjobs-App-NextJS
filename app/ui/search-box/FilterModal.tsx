import iconLocation from "@/public/desktop/icon-location.svg";
import InputText from "../InputText";
import InputCheckbox from "../InputCheckbox";
import PrimaryButton from "../PrimaryButton";

const FilterModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-midnight/50 flex justify-center items-center">
      <dialog className="w-4/5 rounded-lg p-6">
        <form>
          <InputText
            src={iconLocation}
            alt="Location icon"
            name="location"
            placeholder="Filter by location..."
            className="pb-6"
          />
          <hr className="text-light-grey" />
          <InputCheckbox
            name="full-time"
            labelText="Full Time Only"
            className="my-6"
          />
          <PrimaryButton text="Search" className="w-full" />
        </form>
      </dialog>
    </div>
  );
};
export default FilterModal;
