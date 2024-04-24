import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "framer-motion";

import { useAnimateInputText } from "@/app/lib/useAnimateInput";

const InputText: React.FC<{
  src: string | StaticImport;
  alt: string;
  name?: string;
  placeholder?: string;
  className?: string;
  animatedText?: string;
  delay?: number;
  animated?: boolean;
}> = ({
  src,
  alt,
  name,
  placeholder,
  className,
  animatedText,
  delay,
  animated,
}) => {
  const { label: labelStyle, input: inputStyle } = useAnimateInputText(
    3500,
    4000
  );

  const style: string = `flex w-full gap-x-5 ${className}`;

  const text = animatedText!.split(" ");

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className={style}>
      <Image src={src} alt={alt} className="w-auto h-full" />
      <label className={labelStyle}>
        {text.map((element, i) => (
          <motion.span
            key={i}
            variants={animation}
            initial={animated && "initial"}
            animate={animated && "animate"}
            transition={{
              duration: 0.25,
              delay: i / delay!,
            }}
          >
            {element}{" "}
          </motion.span>
        ))}
      </label>
      <motion.input
        type="text"
        name={name}
        placeholder={placeholder}
        className={inputStyle}
        variants={animation}
        initial={animated && "initial"}
        animate={animated && "animate"}
        transition={{ delay: 4 }}
      />
    </div>
  );
};

export default InputText;
