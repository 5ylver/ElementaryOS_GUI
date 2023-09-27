import { Applications, DateTime, Settings } from "./components";

function TopBar() {
  return (
    <>
      <div className="absolute bg-black/40 w-full flex justify-between px-3 py-0.5 text-white z-10">
        <Applications />
        <DateTime />
        <Settings />
      </div>
    </>
  );
}
export default TopBar;
