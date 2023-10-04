import { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  const formattedDateTime = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[dateTime.getDay()];
    const month = months[dateTime.getMonth()];
    const day = dateTime.getDate();
    const hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");

    return `${dayOfWeek}, ${month} ${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDateTime(new Date());
    }, 60000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="flex justify-center w-full select-none text-base font-medium cursor-default">
      {formattedDateTime()}
    </div>
  );
}
export default DateTime;
