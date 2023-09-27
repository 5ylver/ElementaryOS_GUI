import { useContext } from "react";

import { Context } from "@/context";
import { Applications, DateTime, Settings } from "./components";

function TopBar() {
  const { allSize } = useContext(Context);

  return (
    <>
      <div
        className={`absolute w-full flex justify-between px-3 py-0.5 text-white z-10 transition-colors ${
          allSize ? "bg-black" : "bg-transparent"
        }`}
      >
        <Applications />
        <DateTime />
        <Settings />
      </div>
    </>
  );
}
export default TopBar;
