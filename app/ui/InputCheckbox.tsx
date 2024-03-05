"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import classes from "@/app/ui/InputCheckbox.module.css";
import iconCheck from "@/public/desktop/icon-check.svg";

const InputCheckbox: React.FC<{
  name: string;
  labelText: string;
}> = ({ name, labelText }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkboxState = useRef<HTMLInputElement>(null);

  const checkHandler: () => void = () => {
    setIsChecked(checkboxState.current?.checked ?? false);
  };

  return (
    <label className={classes.label}>
      <input
        type="checkbox"
        name={name}
        onClick={checkHandler}
        ref={checkboxState}
      />
      <span className={classes.span}>
        {isChecked && <Image src={iconCheck} alt="Check icon" />}
      </span>
      <p className="h-6 font-bold">{labelText}</p>
    </label>
  );
};

export default InputCheckbox;
