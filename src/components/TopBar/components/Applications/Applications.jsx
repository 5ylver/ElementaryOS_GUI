import { useContext } from "react";

import { magnifyingGlass } from "@/assets";
import { Context } from "@/context";
import { MenuApps } from "./components";

function Applications() {
  const { showOptTopBar, setShowOptTopBar } = useContext(Context);

  const { showAppsTB } = showOptTopBar;

  return (
    <>
      <div className="flex items-center w-full space-x-1 select-none">
        <img
          src={magnifyingGlass}
          className="w-[18px] h-[18px]"
          id="app"
          draggable="false"
          onClick={(e) => {
            e.stopPropagation();
            setShowOptTopBar({
              ...showOptTopBar,
              showAppsTB: !showOptTopBar.showAppsTB,
            });
          }}
          alt=""
        />
        <span
          className="text-base font-medium cursor-default"
          onClick={(e) => {
            e.stopPropagation();
            setShowOptTopBar({
              ...showOptTopBar,
              showAppsTB: !showOptTopBar.showAppsTB,
            });
          }}
        >
          Applications
        </span>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-7 left-3 transition-all duration-500 ${
          showAppsTB
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <MenuApps />
      </div>
    </>
  );
}

export default Applications;
