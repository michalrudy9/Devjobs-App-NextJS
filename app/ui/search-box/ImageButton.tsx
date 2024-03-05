import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const ImageButton: React.FC<{
  src: string | StaticImport;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const style: string = `w-12 h-12 flex justify-center items-center ${className}`;
  return (
    <button className={style}>
      <Image src={src} alt={alt} />
    </button>
  );
};

export default ImageButton;
