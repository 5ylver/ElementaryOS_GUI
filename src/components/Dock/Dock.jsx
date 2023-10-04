import { useContext, useState } from "react";

import { plus, systemSettings, terminal, videos } from "@/assets";

import { Context } from "@/context";

function Dock() {
  const { apps } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const imgApp = {
    terminal,
    changeWallpaper: systemSettings,
    videos,
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    closeContextMenu();

    const customMenu = document.createElement("div");
    customMenu.setAttribute("id", "menu-dock");
    customMenu.className = "custom-menu";
    customMenu.innerHTML = `
      <div class="menu-item">Keep in dock</div>
    `;

    customMenu.style.top = `${e.clientY - 40}px`;
    customMenu.style.left = `${e.clientX}px`;

    document.body.appendChild(customMenu);

    window.document
      .getElementById("menu-dock")
      ?.addEventListener("mouseenter", () => {
        setIsOpen(true);
      });

    window.document
      .getElementById("menu-dock")
      ?.addEventListener("mouseleave", () => {
        setIsOpen(false);
        closeContextMenu();
      });

    document.addEventListener("click", () => {
      closeContextMenu();
    });
  };

  const closeContextMenu = () => {
    const customMenu = document.querySelector(".custom-menu");
    if (customMenu) {
      document.body.removeChild(customMenu);
      document.removeEventListener("click", closeContextMenu);
    }
  };

  return (
    <div className="w-full absolute bottom-0 z-40 flex justify-center bg-blu">
      <div className="flex relative">
        <button
          className={`w-10 h-2 ${isOpen && "h-20 w-48"}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          id="container"
        >
          <div className="absolute inset-x-0 -top-4 flex h-0 items-center justify-center">
            <div
              className={`transition-all duration-500 ${
                isOpen
                  ? "opacity-100 visible translate-y-12"
                  : "opacity-0 invisible translate-y-full"
              }`}
            >
              <div className=" text-sky-600" id="content">
                {isOpen && (
                  <div
                    className="flex items-center space-x-1"
                    onContextMenu={handleContextMenu}
                  >
                    {apps.length == 0 ? (
                      <img
                        src={plus}
                        className="w-12 h-1w-12 hover:scale-105 hover:contrast-125"
                        alt=""
                      />
                    ) : (
                      <>
                        {apps.map((app, i) => (
                          <img
                            key={i}
                            src={imgApp[app]}
                            className="w-14 h-14 hover:scale-105 hover:contrast-125"
                            alt="app"
                          />
                        ))}
                      </>
                    )}
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
