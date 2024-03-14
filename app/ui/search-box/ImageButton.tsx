import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { MouseEventHandler } from "react";

const ImageButton: React.FC<{
  src: string | StaticImport;
  alt: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}> = ({ src, alt, className, type, onClick }) => {
  const style: string = `w-12 h-12 flex justify-center items-center ${className}`;
  return (
    <button type={type} className={style} onClick={onClick}>
      <Image src={src} alt={alt} />
    </button>
  );
};

export default ImageButton;
