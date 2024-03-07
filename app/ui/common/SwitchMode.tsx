import Image from "next/image";

import iconSun from "@/public/desktop/icon-sun.svg";
import iconMoon from "@/public/desktop/icon-moon.svg";

const SwitchMode = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Image src={iconSun} alt="Sun icon" className="w-auto h-full" />
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-10 h-5 bg-white rounded-full peer-checked:after:translate-x-5 after:absolute after:top-[4px] after:start-[4px] after:bg-violet after:hover:bg-light-violet after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
      </label>
      <Image src={iconMoon} alt="Moon icon" className="w-auto h-full" />
    </div>
  );
};

export default SwitchMode;
