import { w1 } from "@/assets";

function Desktop() {
  return (
    <div className="h-screen select-none">
      <img
        src={w1}
        alt="fondo"
        className="h-full w-full object-cover pointer-events-none"
        draggable="false"
      />
    </div>
  );
}
export default Desktop;
