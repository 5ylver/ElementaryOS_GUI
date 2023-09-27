import { useRef, useState } from "react";
import { Rnd } from "react-rnd";

import { resize2, w1, w2, w3, w4, w5, xMark } from "@/assets";
import { resize1 } from "../../assets";

function Desktop() {
  const [drag, setDrag] = useState(true);
  const [showApp, setshowApp] = useState(true);
  const rndRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    closeContextMenu();

    const customMenu = document.createElement("div");
    customMenu.className = "custom-menu";
    customMenu.innerHTML = `
      <div id="changeWallpaper" class="menu-item">Change Wallpaper...</div>
      <div class="menu-item">Display Settings...</div>
      <div class="menu-item">System Settings...</div>
    `;

    customMenu.style.top = `${e.clientY}px`;
    customMenu.style.left = `${e.clientX}px`;

    document.body.appendChild(customMenu);

    document.addEventListener("click", closeContextMenu);
  };

  const closeContextMenu = () => {
    const customMenu = document.querySelector(".custom-menu");
    if (customMenu) {
      document.body.removeChild(customMenu);
      document.removeEventListener("click", closeContextMenu);
    }
  };

  const handleChangeWallpaper = (wallpaper) => {
    const desk = window.document.getElementById("desktop");
    desk.setAttribute(
      "style",
      `transition: all 0.3s ease ;background-image:url(${wallpaper})`
    );
  };

  return (
    <div
      className="h-screen context-menu w-full wallpaper pt-7 relative overflow-hidden"
      onContextMenu={handleContextMenu}
      id="desktop"
    >
      <div className="h-full w-full">
        <Rnd
          ref={rndRef}
          className="border bg-white rounded-lg"
          default={{
            x: 50,
            y: 50,
            // width: 320,
            // height: 200,
          }}
          // maxWidth="500px"
          // maxHeight="500px"
          // size={{ width: 700, height: 700 }}
          minHeight="500px"
          minWidth="500px"
          disableDragging={drag}
          bounds="parent"
        >
          <div className="w-full">
            <div
              className="flex items-center justify-between bg-gray-300 rounded-t-lg py-1 px-2 cursor-default active:cursor-grabbing"
              onMouseOver={() => setDrag(false)}
              onMouseOut={() => setDrag(true)}
            >
              <div onClick={() => setshowApp(false)}>
                <img src={xMark} className="w-3 h-3" alt="" />
              </div>

              <div className="">Title</div>

              <div
                onClick={() => {
                  rndRef.current.updateSize({
                    width: 1685,
                    height: 900,
                  });

                  rndRef.current.updatePosition({
                    x: 0,
                    y: 30,
                  });

                  window.document
                    .getElementById("resize")
                    .setAttribute("src", `${resize1}`);
                }}
              >
                <img src={resize2} id="resize" className="w-4 h-4" alt="" />
              </div>
            </div>

            <div className="p-3 overflow-hidden">
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="relative">
                  <img
                    src={w1}
                    className="w-44 selected-img bb"
                    draggable="false"
                    onClick={() => handleChangeWallpaper(w1)}
                    alt=""
                    tabIndex={"0"}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white bg-blue-400 rounded-full p-0.5 absolute top-0 left-0 -translate-x-2 -translate-y-2 ring-1 ring-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <img
                  src={w2}
                  className="w-44 selected-img bb"
                  draggable="false"
                  onClick={() => handleChangeWallpaper(w2)}
                  alt=""
                  tabIndex={"0"}
                />
                <img
                  src={w3}
                  className="w-44 selected-img bb"
                  draggable="false"
                  onClick={() => handleChangeWallpaper(w3)}
                  alt=""
                  tabIndex={"0"}
                />
                <img
                  src={w4}
                  className="w-44 selected-img bb"
                  draggable="false"
                  onClick={() => handleChangeWallpaper(w4)}
                  alt=""
                  tabIndex={"0"}
                />
                <img
                  src={w5}
                  className="w-44 selected-img bb"
                  draggable="false"
                  onClick={() => handleChangeWallpaper(w5)}
                  alt=""
                  tabIndex={"0"}
                />
              </div>
            </div>
          </div>
        </Rnd>
      </div>
    </div>
  );
}
export default Desktop;
