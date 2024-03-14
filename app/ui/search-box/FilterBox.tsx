import React from "react";

import iconLocation from "@/public/desktop/icon-location.svg";
import InputText from "../common/InputText";
import InputCheckbox from "../common/inputCheckbox/InputCheckbox";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Modal from "./Modal";

const FilterBox: React.FC<{
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className="w-4/5 rounded-lg p-6 md:hidden">
      <InputText
        src={iconLocation}
        alt="Location icon"
        name="locationMobile"
        placeholder="Filter by location..."
        className="pb-6"
      />
      <hr className="text-light-grey" />
      <InputCheckbox
        name="fullTimeMobile"
        labelText="Full Time Only"
        className="my-6"
      />
      <PrimaryButton type="submit" text="Search" className="w-full" />
    </Modal>
  );
};
export default FilterBox;
