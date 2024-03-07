import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const InputText: React.FC<{
  src: string | StaticImport;
  alt: string;
  name?: string;
  placeholder?: string;
  className?: string;
}> = ({ src, alt, name, placeholder, className }) => {
  const style: string = `flex w-full gap-x-5 ${className}`;

  return (
    <div className={style}>
      <Image src={src} alt={alt} className="w-auto h-full" />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full outline-none"
      />
    </div>
  );
};

export default InputText;
