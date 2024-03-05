import React from "react";

const PrimaryButton: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const style: string = `bg-violet py-3 px-6 font-bold text-white rounded-md hover:bg-light-violet ${className}`;

  return <button className={style}>{text}</button>;
};

export default PrimaryButton;
