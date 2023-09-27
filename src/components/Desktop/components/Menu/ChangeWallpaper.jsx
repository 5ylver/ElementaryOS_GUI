import { w1, w2, w3, w4, w5 } from "@/assets";

function ChangeWallpaper() {
  const handleChangeWallpaper = (wallpaper) => {
    const desk = window.document.getElementById("desktop");
    desk.setAttribute(
      "style",
      `transition: all 0.3s ease ;background-image:url(${wallpaper})`
    );
  };

  return (
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
  );
}
export default ChangeWallpaper;
