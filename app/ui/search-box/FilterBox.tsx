import React from "react";

import iconLocation from "@/public/desktop/icon-location.svg";
import InputText from "@/app/ui/common/InputText";
import InputCheckbox from "../common/InputCheckbox";
import PrimaryButton from "@/app/ui/common/buttons/PrimaryButton";
import Modal from "@/app/ui/search-box/Modal";

const FilterBox: React.FC<{
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  closeAfterSubmit?: () => void;
}> = ({ onClose, closeAfterSubmit }) => {
  return (
    <Modal onClose={onClose} className="w-4/5 rounded-lg p-6 md:hidden">
      <InputText
        src={iconLocation}
        alt="Location icon"
        name="location"
        placeholder="Filter by location..."
        className="pb-6"
      />
      <hr className="text-light-grey" />
      <InputCheckbox
        name="fullTime"
        labelText="Full Time Only"
        className="my-6"
      />
      <PrimaryButton
        type="submit"
        closeModal={closeAfterSubmit}
        text="Search"
        className="w-full"
        animated
      />
    </Modal>
  );
};
export default FilterBox;
