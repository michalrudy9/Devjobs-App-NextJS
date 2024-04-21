"use client";

import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

type InputTextStyle = {
  label: string;
  input: string;
};

export const useAnimateInputText = (): InputTextStyle => {
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
    }, 3000);

    setTimeout(() => {
      setInputStyle((prevValue: InputTextStyle) => {
        return {
          label: "hidden",
          input: `w-full outline-none ${
            isLightMode ? "bg-white" : "bg-very-dark-blue text-white"
          }`,
        };
      });
    }, 3500);
  }, []);

  return { ...inputStyle };
};
