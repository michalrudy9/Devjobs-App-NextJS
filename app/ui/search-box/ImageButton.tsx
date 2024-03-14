import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";

import Spinner from "../common/Spinner";

const ImageButton: React.FC<{
  src: string | StaticImport;
  alt: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}> = ({ src, alt, className, type, onClick }) => {
  const { pending } = useFormStatus();
  const style: string = `w-12 h-12 flex justify-center items-center ${className}`;

  return (
    <button type={type} className={style} onClick={onClick}>
      {pending ? <Spinner /> : <Image src={src} alt={alt} />}
    </button>
  );
};

export default ImageButton;
