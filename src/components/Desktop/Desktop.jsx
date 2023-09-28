import { useContext } from "react";

import { AppContainer, ChangeWallpaper } from "./components";
import { Context } from "@/context";

function Desktop() {
  const { apps, setApps } = useContext(Context);

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

    window.document
      .getElementById("changeWallpaper")
      ?.addEventListener("click", () => {
        setApps([...apps, "systemSettings"]);
      });

    document.addEventListener("click", closeContextMenu);
  };

  const closeContextMenu = () => {
    const customMenu = document.querySelector(".custom-menu");
    if (customMenu) {
      document.body.removeChild(customMenu);
      document.removeEventListener("click", closeContextMenu);
    }
  };

  return (
    <div
      className="h-screen context-menu w-full wallpaper pt-7 relative overflow-hidden"
      onContextMenu={handleContextMenu}
      id="desktop"
    >
      <div className="h-full w-full">
        {apps?.map((app, i) => (
          <AppContainer key={i} index={i}>
            {app == "systemSettings" && <ChangeWallpaper />}
          </AppContainer>
        ))}
      </div>
    </div>
  );
}
export default Desktop;
