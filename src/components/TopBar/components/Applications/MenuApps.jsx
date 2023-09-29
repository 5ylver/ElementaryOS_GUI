import { useContext } from "react";

import {
  listBullet,
  squares,
  systemSettings,
  terminal,
  videos,
} from "@/assets";
import { Context } from "@/context";

function MenuApps() {
  const { setApps } = useContext(Context);

  return (
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

        <div className="mt-5 grid grid-cols-5 px-6">
          <img
            src={systemSettings}
            className="w-14 h-1w-14 hover:scale-105 hover:contrast-125"
            alt=""
          />
          <img
            src={terminal}
            className="w-14 h-1w-14 hover:scale-105 hover:contrast-125"
            onClick={() => setApps((prev) => [...prev, "terminal"])}
            alt=""
          />
          <img
            src={videos}
            className="w-14 h-1w-14 hover:scale-105 hover:contrast-125"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default MenuApps;
