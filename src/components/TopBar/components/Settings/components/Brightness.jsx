import { useContext } from "react";

import { sun } from "@/assets";
import { Context } from "@/context";

function Brightness() {
  const { showOptTopBar, setShowOptTopBar } = useContext(Context);

  const { showBrightness } = showOptTopBar;

  return (
    <div className="relative">
      <img
        src={sun}
        className="w-5 h-5"
        onClick={(e) => {
          e.stopPropagation();
          setShowOptTopBar({
            ...showOptTopBar,
            showBrightness: !showOptTopBar.showBrightness,
          });
        }}
        draggable="false"
        alt=""
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-6 right-5 translate-x-1/2 transition-all duration-500 ${
          showBrightness
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <BrightnessOpt />
      </div>
    </div>
  );
}

const BrightnessOpt = () => {
  const { brightness, setBrightness } = useContext(Context);
  return (
    <div className="w-[200px] h-[80px] flex flex-col">
      <div className="triangle self-end mr-[4.8rem]" />
      <div className="text-black bg-white rounded h-full flex items-center space-x-2 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        <input
          type="range"
          min="40"
          max="150"
          value={brightness}
          step="1"
          className="outline-none"
          onChange={(e) => setBrightness(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Brightness;
