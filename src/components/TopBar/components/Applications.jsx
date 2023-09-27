import { useState } from "react";

import { listBullet, magnifyingGlass, squares } from "@/assets";

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
          className="w-4 h-4"
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
        onClick={(e) => e.stopPropagation()}
      >
        <MenuApps />
      </div>
      {/* </div> */}
    </>
  );
}

const MenuApps = () => {
  return (
    <>
      <div className="w-[42vw] h-[50vh] bg-red-100/50">
        <div className="triangle ml-10"></div>
        <div className="bg-white rounded p-3">
          <div className="flex">
            <div className="p-1 flex items-center justify-center rounded active:bg-gray-200">
              <img src={squares} className="w-4 h-4" alt="" />
            </div>
            <div className="p-1 flex items-center justify-center rounded active:bg-gray-200">
              <img src={listBullet} className="w-4 h-4" alt="" />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="peer w-full rounded border border-blue-gray-200 border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-sky-500 focus:outline-0 text-black"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
