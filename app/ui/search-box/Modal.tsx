import React from "react";
import { createPortal } from "react-dom";

import { useAppSelector } from "@/store/hooks";

const Modal: React.FC<{
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}> = ({ children, onClose, className }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    !isLightMode && "bg-very-dark-blue"
  } ${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`;

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-midnight/50 flex justify-center items-center"
        onClick={onClose}
      />
      <dialog open className={style}>
        {children}
      </dialog>
    </>,
    document.getElementById("modal") ?? new DocumentFragment()
  );
};

export default Modal;
