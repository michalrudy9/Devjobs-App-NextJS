import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "framer-motion";

import { useAnimateInputText } from "@/app/lib/useAnimateInput";
import { useAppSelector } from "@/store/hooks";

const InputText: React.FC<{
  src?: string | StaticImport;
  alt?: string;
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
  const isLightMode = useAppSelector((state) => state.mode.isLight);
  const { label: labelStyle, input: inputStyle } = useAnimateInputText(
    animated ? 3500 : 0,
    animated ? 4000 : 0
  );

  const style: string = `flex w-full gap-x-5 ${className}`;

  const text = animatedText && animatedText.split(" ");

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className={style}>
      {src && alt && (
        <Image src={src && src} alt={alt} className="w-auto h-full" />
      )}
      <label className={labelStyle}>
        {text &&
          text.map((element, i) => (
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
        className={`${inputStyle} ${
          isLightMode ? " bg-white" : " bg-very-dark-blue text-white"
        }`}
        variants={animation}
        initial={animated && "initial"}
        animate={animated && "animate"}
        transition={{ delay: 4 }}
      />
    </div>
  );
};

export default InputText;
