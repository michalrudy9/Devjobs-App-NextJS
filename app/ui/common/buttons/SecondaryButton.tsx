import React from "react";
import { motion } from "framer-motion";

import { useAppSelector } from "@/store/hooks";

const SecondaryButton: React.FC<{ text?: string; className?: string }> = ({
  text,
  className,
}) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode
      ? "bg-secondary-default hover:bg-secondary-hover"
      : "bg-secondary-dark-default hover:bg-secondary-dark-hover text-white"
  } py-3 px-6 font-bold text-violet rounded-md  ${className}`;

  return (
    <motion.button
      className={style}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {text}
    </motion.button>
  );
};

export default SecondaryButton;
