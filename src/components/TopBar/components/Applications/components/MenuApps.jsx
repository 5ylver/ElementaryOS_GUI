import { useContext, useEffect, useState } from "react";

import { Context } from "@/context";
import {
  listBullet,
  squares,
  systemSettings,
  terminal,
  videos,
} from "@/assets";

const apps = [
  { name: "changeWallpaper", icon: systemSettings },
  { name: "terminal", icon: terminal },
  { name: "videos", icon: videos },
];

function MenuApps() {
  const { setApps, setShowApps } = useContext(Context);
  const [searchApp, setSearchApp] = useState("");
  const [viewAsGrid, setviewAsGrid] = useState(true);
  const [appsGrid, setappsGrid] = useState(apps);

  useEffect(() => {
    const filter1 = [...apps].filter((app) => app.name.includes(searchApp));
    setappsGrid(filter1);
  }, [searchApp]);

  return (
    <div className="w-[42vw] h-[50vh]">
      <div className="triangle ml-10"></div>
      <div className="bg-white rounded h-full">
        <div className="flex space-x-2 p-3">
          {searchApp.length == 0 && (
            <div className="flex">
              <div
                className={`p-1 flex items-center justify-center rounded active:bg-gray-200 border-2 ${
                  viewAsGrid && "bg-gray-100"
                }`}
                onClick={() => setviewAsGrid(true)}
              >
                <img src={squares} className="w-4 h-4" alt="" />
              </div>

              <div
                className={`p-1 flex items-center justify-center rounded active:bg-gray-200 border-2 ${
                  !viewAsGrid && "bg-gray-100"
                }`}
                onClick={() => setviewAsGrid(false)}
              >
                <img src={listBullet} className="w-4 h-4" alt="" />
              </div>
            </div>
          )}

          <div className="w-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-[14px] h-[14px] absolute top-1.5 left-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              className="peer w-full rounded border border-blue-gray-200 border-t-transparent bg-transparent px-5 py-0.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-sky-500 focus:outline-0 text-black"
              value={searchApp}
              onChange={(e) => setSearchApp(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        {viewAsGrid ? (
          <div className="mt-5 grid grid-cols-5 px-6">
            {appsGrid.map((app, i) => (
              <div key={i}>
                <img
                  src={app.icon}
                  className="w-14 h-14 hover:scale-105 hover:contrast-125 mx-auto"
                  onClick={() => {
                    setApps((prev) => [...prev, app.name]);
                    setShowApps(false);
                  }}
                  alt={app.name}
                />
                <p className="text-black text-xs text-center mt-2 first-letter:uppercase">
                  {app.name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full pb-[52px]">
            <div className="bg-gray-100 text-black text-sm font-light border-r border-gray-300 rounded-bl-md">
              <ul>
                <li className="py-1 hover:bg-white px-3">Accessories</li>
                <li className="py-1 hover:bg-white px-3">Games</li>
                <li className="py-1 hover:bg-white px-3">Graphics</li>
                <li className="py-1 hover:bg-white px-3">Internet</li>
                <li className="py-1 hover:bg-white px-3">Office</li>
                <li className="py-1 hover:bg-white px-3">Programming</li>
                <li className="py-1 hover:bg-white px-3">Sound & Video</li>
                <li className="py-1 hover:bg-white px-3">System Tools</li>
              </ul>
            </div>
            <div>Apps</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default MenuApps;
