import React from "react";
import { motion } from "framer-motion";

const PrimaryButton: React.FC<{
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  closeModal?: () => void;
  className?: string;
  animated?: boolean;
}> = ({ text, type, closeModal, className, animated }) => {
  const style: string = `bg-violet py-3 px-6 font-bold text-white rounded-md hover:bg-light-violet ${className}`;
  const button = {
    animate: {
      rotate: [0, -10, 0, 10, 0],
      transition: {
        delay: 3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <motion.button
      type={type}
      onClick={closeModal}
      className={style}
      variants={button}
      animate={`${animated && "animate"}`}
      whileHover={`${animated && "whileHover"}`}
      whileTap={`${animated && "whileTap"}`}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
