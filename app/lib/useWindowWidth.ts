import { useEffect, useState } from "react";

const getWindowWidth = (): number => {
  return window.innerWidth;
};

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const resizeHendler = () => setWindowWidth(getWindowWidth());
    window.addEventListener("resize", resizeHendler);
    return () => window.removeEventListener("resize", resizeHendler);
  }, [setWindowWidth]);

  return windowWidth;
};
