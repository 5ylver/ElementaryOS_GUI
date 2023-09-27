import { useState } from "react";

import { systemSettings, terminal, videos } from "@/assets";

function Dock() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full absolute bottom-0 z-40 flex justify-center">
      <div className="flex relative">
        <button
          className={`w-10 h-2 ${isOpen && "h-20 w-48"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          id="container"
        >
          <div className="absolute inset-x-0 top-4 flex h-0 items-center justify-center">
            <div
              className={`transition-all duration-500 ${
                isOpen
                  ? "opacity-100 visible translate-y-7"
                  : "opacity-0 invisible translate-y-full"
              }`}
            >
              <div className=" text-sky-600" id="content">
                {isOpen && (
                  <div className="flex items-center space-x-1">
                    <img
                      src={terminal}
                      className="w-10 h-10 hover:scale-105 hover:contrast-125"
                      alt=""
                    />
                    <img
                      src={systemSettings}
                      className="w-10 h-10 hover:scale-105 hover:contrast-125"
                      alt=""
                    />
                    <img
                      src={videos}
                      className="w-10 h-10 hover:scale-105 hover:contrast-125"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Dock;
