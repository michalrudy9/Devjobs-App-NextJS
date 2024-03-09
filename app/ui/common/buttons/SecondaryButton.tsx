import React from "react";

const SecondaryButton: React.FC<{ text?: string; className?: string }> = ({
  text,
  className,
}) => {
  const style: string = `bg-secondary-default py-3 px-6 font-bold text-violet rounded-md hover:bg-secondary-hover ${className}`;

  return <button className={style}>{text}</button>;
};

export default SecondaryButton;
