import Image from "next/image";
import { motion } from "framer-motion";

import iconSun from "@/public/desktop/icon-sun.svg";
import iconMoon from "@/public/desktop/icon-moon.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggle } from "@/store/modeSlice";

const SwitchMode = () => {
  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  return (
    <div className="flex items-center gap-x-4">
      <Image src={iconSun} alt="Sun icon" className="w-auto h-full" />
      <div
        className={`w-[2.813rem] h-[1.375rem] bg-gray/40 flex justify-start rounded-[3.125rem] p-1 cursor-pointer ${
          !isLightMode && "justify-end"
        }`}
        onClick={() => dispatch(toggle())}
      >
        <motion.div
          className="w-[0.875rem] h-[0.875rem] bg-white rounded-[2.5rem]"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
      </div>
      <Image src={iconMoon} alt="Moon icon" className="w-auto h-full" />
    </div>
  );
};

export default SwitchMode;
