/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { Rnd } from "react-rnd";

import { Context } from "@/context";
import { resize1, resize2, xMark } from "@/assets";

function AppContainer({ children, index, theme }) {
  const { allSize, setAllSize, setApps, apps } = useContext(Context);
  const [drag, setDrag] = useState(true);
  const rndRef = useRef(null);

  const themeBlack = theme == "terminal" ? "bg-slate-800" : "bg-white";

  const handleCloseApp = () => {
    const removeApp = [...apps].filter((app, i) => i != index);
    setApps(removeApp);
  };

  const handleMaxOrMinApp = () => {
    if (allSize) {
      rndRef.current.updateSize({
        width: "500px",
        height: "500px",
      });

      rndRef.current.updatePosition({
        x: 50,
        y: 50,
      });

      setAllSize(false);
    } else {
      rndRef.current.updateSize({
        width: "100%",
        height: "100%",
      });

      rndRef.current.updatePosition({
        x: 0,
        y: 30,
      });

      setAllSize(true);
    }
  };

  const handleMaxTouchTopBar = (d) => {
    if (d.lastY == 28) {
      rndRef.current.updateSize({
        width: "100%",
        height: "100%",
      });

      rndRef.current.updatePosition({
        x: 0,
        y: 30,
      });

      setAllSize(true);
    }
  };

  return (
    <>
      <Rnd
        ref={rndRef}
        className={`rounded-lg ${themeBlack}`}
        default={{
          x: 50,
          y: 50,
          // width: "750px",
          // height: "450px",
        }}
        minWidth="950px"
        minHeight="500px"
        disableDragging={drag}
        bounds="parent"
        onDragStop={(e, d) => handleMaxTouchTopBar(d)}
      >
        <div className="w-full h-full">
          <div
            className="flex items-center justify-between bg-gray-300 rounded-t-lg py-1 px-2 cursor-default active:cursor-grabbing"
            onMouseOver={() => setDrag(false)}
            onMouseOut={() => setDrag(true)}
          >
            <div onClick={handleCloseApp} className="cursor-default">
              <img
                src={xMark}
                className="w-4 h-4"
                draggable="false"
                alt="xMark"
              />
            </div>

            <div className="">Title</div>

            <div onClick={handleMaxOrMinApp}>
              <img
                src={allSize ? resize1 : resize2}
                className="w-4 h-4"
                alt=""
              />
            </div>
          </div>

          <div className="p-3 h-full">{children}</div>
        </div>
      </Rnd>
    </>
  );
}
export default AppContainer;
