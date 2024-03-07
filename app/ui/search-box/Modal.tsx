import React from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}> = ({ children, onClose, className }) => {
  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen bg-midnight/50 flex justify-center items-center"
      onClick={onClose}
    >
      <dialog open className={className}>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal") ?? new DocumentFragment()
  );
};

export default Modal;
