import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "framer-motion";

import { useAnimateInputText } from "@/app/lib/useAnimateInput";
import { useAppSelector } from "@/store/hooks";

const InputText: React.FC<{
  src: string | StaticImport;
  alt: string;
  name?: string;
  placeholder?: string;
  className?: string;
}> = ({ src, alt, name, placeholder, className }) => {
  const { text: animateText, animationTime, replaceAfterTime, span, input} = useAppSelector((state) => state.inputText);
  
  const { label: labelStyle, input: inputStyle } = useAnimateInputText(animationTime, replaceAfterTime);

  const style: string = `flex w-full gap-x-5 ${className}`;

  const text = animateText.split(" ");

  return (
    <div className={style}>
      <Image src={src} alt={alt} className="w-auto h-full" />
      <label className={labelStyle}>
        {text.map((element, i) => (
          <motion.span
            key={i}
            initial={span.initial}
            animate={span.animate}
            transition={{
              duration: span.transition.duration,
              delay: i / span.transition.delay,
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
        initial={input.initial}
        animate={input.animate}
        transition={input.transition}
      />
    </div>
  );
};

export default InputText;
