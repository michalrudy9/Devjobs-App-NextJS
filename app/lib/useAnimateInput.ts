"use client";

import { useEffect, useState } from "react";

type InputTextStyle = {
  label: string;
  input: string;
};

export const useAnimateInputText = (
  animationTime: number,
  replaceAfterTime: number
): InputTextStyle => {
  const [inputStyle, setInputStyle] = useState<InputTextStyle>({
    label: "text-gray",
    input: "hidden",
  });

  useEffect(() => {
    setTimeout(() => {
      setInputStyle((prevValue: InputTextStyle) => {
        return {
          label: "transition ease-in-out delay-100 opacity-0",
          input: prevValue.input,
        };
      });
    }, animationTime * 1000);

    setTimeout(() => {
      setInputStyle((prevValue: InputTextStyle) => {
        return {
          label: "hidden",
          input: "w-full outline-none",
        };
      });
    }, replaceAfterTime * 1000);
  }, []);

  return { ...inputStyle };
};
