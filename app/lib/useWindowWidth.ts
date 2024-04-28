"use client";

import { useEffect, useState } from "react";

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const resizeHandler = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return windowWidth;
};
