import { useState } from "react";

import { magnifyingGlass } from "@/assets";
import MenuApps from "./MenuApps";

function Applications() {
  const [showApps, setShowApps] = useState(false);

  return (
    <>
      <div
        className="flex items-center w-full space-x-1 select-none z-20"
        onClick={() => setShowApps(!showApps)}
      >
        <img
          src={magnifyingGlass}
          className="w-[18px] h-[18px]"
          draggable="false"
          alt=""
        />
        <span className="text-base font-medium cursor-default">
          Applications
        </span>
      </div>

      {/* <div
        className="absolute top-0 left-0 w-full z-10 h-screen"
        onClick={() => setShowApps(false)}
      > */}
      <div
        className={`absolute top-7 left-3 transition-all duration-500 ${
          showApps
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <MenuApps />
      </div>
      {/* </div> */}
    </>
  );
}

export default Applications;
