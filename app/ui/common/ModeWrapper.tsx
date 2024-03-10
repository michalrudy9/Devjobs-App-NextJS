import React from "react";

import { useAppSelector } from "@/store/hooks";

const ModeWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-light-grey" : "bg-midnight"
  } ${className}`;

  return <div className={style}>{children}</div>;
};

export default ModeWrapper;
