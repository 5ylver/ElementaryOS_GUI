/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { Rnd } from "react-rnd";

import { Context } from "@/context";
import { resize1, resize2, xMark } from "@/assets";

function AppContainer({ children }) {
  const [drag, setDrag] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [showApp, setshowApp] = useState(true);
  const rndRef = useRef(null);
  const { allSize, setAllSize } = useContext(Context);

  return (
    <>
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
        onDragStop={(e, d) => {
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
        }}
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
              }}
            >
              <img
                src={allSize ? resize1 : resize2}
                id="resize"
                className="w-4 h-4"
                alt=""
              />
            </div>
          </div>

          <div className="p-3 overflow-hidden">{children}</div>
        </div>
      </Rnd>
    </>
  );
}
export default AppContainer;
