import { useContext } from "react";

import { power } from "@/assets";
import { Context } from "@/context";

function Power() {
  const { showOptTopBar, setShowOptTopBar } = useContext(Context);

  const { showPowerOpt } = showOptTopBar;

  return (
    <div className="relative">
      <img
        src={power}
        className="w-5 h-5"
        draggable="false"
        onClick={(e) => {
          e.stopPropagation();
          setShowOptTopBar({
            ...showOptTopBar,
            showPowerOpt: !showOptTopBar.showPowerOpt,
          });
        }}
        alt="power"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-6 right-0 transition-all duration-500 ${
          showPowerOpt
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <PowerOpt />
      </div>
    </div>
  );
}

const PowerOpt = () => {
  const { setIsLogged, username, setShowOptTopBar, showOptTopBar } =
    useContext(Context);

  return (
    <>
      <div className="w-[12vw] h-[20vh] flex flex-col">
        <div className="triangle2 self-end mr-3"></div>
        <div className="bg-white rounded text-black select-none">
          <div className="flex items-center p-3">
            <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center">
              <span className="text-orange-700 font-medium text-2xl">
                {username[0]}
              </span>
            </div>
            <div className="text-sm ml-2">
              <p className="font-medium">{username}</p>
              <p>Logged in</p>
            </div>
          </div>

          <div className="border-t mt-2 text-sm font-light hover:bg-gray-300 px-2 py-1">
            <p
              onClick={() => {
                setIsLogged(false);
                setShowOptTopBar({
                  ...showOptTopBar,
                  showPowerOpt: !showOptTopBar.showPowerOpt,
                });
              }}
            >
              Log Out...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Power;
