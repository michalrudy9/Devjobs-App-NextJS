"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import classes from "./InputCheckbox.module.css";
import iconCheck from "@/public/desktop/icon-check.svg";
import { useAppSelector } from "@/store/hooks";

const InputCheckbox: React.FC<{
  name?: string;
  labelText?: string;
  className?: string;
}> = ({ name, labelText, className }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkboxState = useRef<HTMLInputElement>(null);

  const checkHandler: () => void = () => {
    setIsChecked(checkboxState.current?.checked ?? false);
  };

  const style: string = `${
    isLightMode ? classes.lightTheme : classes.darkTheme
  } ${classes.label} ${className}`;

  return (
    <label className={style}>
      <input
        type="checkbox"
        name={name}
        onClick={checkHandler}
        ref={checkboxState}
      />
      <motion.span
        className={classes.span}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence>
          {isChecked && (
            <motion.span
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 20 }}
            >
              <Image src={iconCheck} alt="Check icon" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
      <p className="h-6 font-bold">{labelText}</p>
    </label>
  );
};

export default InputCheckbox;
