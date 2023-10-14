import { useContext, useEffect, useState } from "react";

import { battery } from "@/assets";
import { Context } from "@/context/Context";

function Battery() {
  const { setShowBatteryOpt, showPercentage } = useContext(Context);
  const [canUseAPI, setCanUseAPI] = useState(false);
  const [charging, setCharging] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if ("getBattery" in navigator) {
      setCanUseAPI(true);

      navigator.getBattery().then((battery) => {
        setPercentage(battery.level * 100);
        setCharging(battery.charging);

        battery.addEventListener("levelchange", () => {
          setPercentage(battery.level * 100);
        });

        battery.addEventListener("chargingchange", () => {
          setCharging(battery.charging);
        });
      });
    } else {
      setCanUseAPI(false);
    }
  }, []);

  return (
    <div
      className="flex items-center space-x-1"
      onClick={(e) => {
        e.stopPropagation();
        setShowBatteryOpt((prev) => !prev);
      }}
    >
      {canUseAPI ? (
        charging ? (
          <svg
            className="w-5 h-5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.248 32.248"
          >
            <g>
              <polygon
                className="fill-white"
                points="2.215,23.014 2.215,8.826 14.404,8.826 16.703,6.541 0,6.541 0,25.304 8.008,25.304 8.873,23.014 "
              ></polygon>
              <path
                className="fill-white"
                d="M29.32,10.916V6.541h-8.586l-0.791,2.286h7.162v14.188H13.451l-2.357,2.289H29.32v-4.299c0.896,0,2.928,0.166,2.928-1.511 v-6.782C32.248,10.688,30.096,10.916,29.32,10.916z"
              ></path>
              <polygon
                className="fill-white"
                points="16.791,13.892 20.748,3.918 8.533,16.695 12.695,16.64 7.557,28.331 20.957,13.835 "
              ></polygon>
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-[22px] h-[22px]"
          >
            <rect
              x={2 * 1 + 1}
              y={2 * 1 + 1 + 7}
              width={(18 - 2 * 1) * (percentage / 100)}
              height={5}
              rx={1 - 1}
              ry={1 - 1}
              fill="white"
            />

            {/* Percentage */}
            <path
              fillRule="evenodd"
              d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
              clipRule="evenodd"
            />
          </svg>
        )
      ) : (
        <img
          src={battery}
          className="w-[22px] h-[22px]"
          draggable="false"
          alt="battery"
        />
      )}

      {showPercentage && (
        <span className="text-sm font-bold">{percentage}%</span>
      )}
    </div>
  );
}
export default Battery;
