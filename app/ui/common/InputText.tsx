import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { useAppSelector } from "@/store/hooks";

const InputText: React.FC<{
  src: string | StaticImport;
  alt: string;
  name?: string;
  placeholder?: string;
  className?: string;
}> = ({ src, alt, name, placeholder, className }) => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const style: string = `flex w-full gap-x-5 ${className}`;
  const inputStyle: string = `w-full outline-none ${
    isLightMode ? "bg-white" : "bg-very-dark-blue text-white"
  }`;

  return (
    <div className={style}>
      <Image src={src} alt={alt} className="w-auto h-full" />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
};

export default InputText;
