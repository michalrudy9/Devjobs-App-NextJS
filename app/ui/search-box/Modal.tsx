import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { useAppSelector } from "@/store/hooks";

const Modal: React.FC<{
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}> = ({ children, onClose, className }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    !isLightMode && "bg-very-dark-blue"
  } ${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`;

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 bg-midnight/50 flex justify-center items-center"
        onClick={onClose}
      />
      <motion.dialog
        open
        className={style}
        variants={{
          hidden: { opacity: 0, bottom: "9%" },
          visible: { opacity: 1, bottom: "18%" },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal") ?? new DocumentFragment()
  );
};

export default Modal;
