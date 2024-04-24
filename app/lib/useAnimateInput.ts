"use client";

import { useAppSelector } from "@/store/hooks";
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
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  useEffect(() => {
    setTimeout(() => {
      setInputStyle((prevValue: InputTextStyle) => {
        return {
          label: "transition ease-in-out delay-100 opacity-0",
          input: prevValue.input,
        };
      });
    }, animationTime);

    setTimeout(() => {
      setInputStyle((prevValue: InputTextStyle) => {
        return {
          label: "hidden",
          input: `w-full outline-none ${
            isLightMode ? "bg-white" : "bg-very-dark-blue text-white"
          }`,
        };
      });
    }, replaceAfterTime);
  }, []);

  return { ...inputStyle };
};
