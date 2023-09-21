import { w1 } from "../../assets";

function Desktop() {
  return (
    <div className="h-screen">
      <img
        src={w1}
        alt="fondo"
        className="h-full w-full object-cover pointer-events-none"
      />
    </div>
  );
}
export default Desktop;
