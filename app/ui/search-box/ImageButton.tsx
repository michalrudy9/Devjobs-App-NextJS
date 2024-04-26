import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

import Spinner from "@/app/ui/common/Spinner";

const ImageButton: React.FC<{
  src: string | StaticImport;
  alt: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  animated?: boolean;
}> = ({ src, alt, className, type, onClick, animated }) => {
  const { pending } = useFormStatus();
  const style: string = `w-12 h-12 flex justify-center items-center ${className}`;

  const button = {
    animate: {
      rotate: [0, -10, 0, 10, 0],
      transition: {
        delay: 3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <motion.button
      type={type}
      className={style}
      onClick={onClick}
      variants={button}
      animate={`${animated && "animate"}`}
      whileHover={`${animated && "whileHover"}`}
      whileTap={`${animated && "whileTap"}`}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {pending ? <Spinner /> : <Image src={src} alt={alt} />}
    </motion.button>
  );
};

export default ImageButton;
