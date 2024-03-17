import React from "react";

const PrimaryButton: React.FC<{
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  closeModal?: () => void;
  className?: string;
}> = ({ text, type, closeModal, className }) => {
  const style: string = `bg-violet py-3 px-6 font-bold text-white rounded-md hover:bg-light-violet ${className}`;

  return (
    <button type={type} onClick={closeModal} className={style}>
      {text}
    </button>
  );
};

export default PrimaryButton;
