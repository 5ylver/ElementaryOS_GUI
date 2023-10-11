import { useEffect, useState } from "react";

function Battery() {
  const [percentage, setPercentage] = useState(0);

  const width = 24;
  const height = 24;
  const batteryWidth = 18;
  const batteryBorderRadius = 1;
  const batteryBorderWidth = 1;
  const batteryPadding = 1;

  const batteryLevel = (batteryWidth - 2 * batteryPadding) * (percentage / 100);

  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        setPercentage(battery.level * 100);

        battery.addEventListener("levelchange", () => {
          setPercentage(battery.level * 100);
        });
      });
    } else {
      console.error("La Battery API no es compatible con este navegador.");
    }
  }, []);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        fill="white"
        className="w-5 h-5"
      >
        {/* Barra de carga */}
        <rect
          x={2 * batteryBorderWidth + batteryPadding}
          y={2 * batteryBorderWidth + batteryPadding + 7}
          width={batteryLevel}
          height={5}
          rx={batteryBorderRadius - batteryBorderWidth}
          ry={batteryBorderRadius - batteryBorderWidth}
          fill="white"
        />

        {/* Rayo */}
        <path
          fillRule="evenodd"
          d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
export default Battery;
