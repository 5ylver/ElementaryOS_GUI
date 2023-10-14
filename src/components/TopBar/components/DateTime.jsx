import { useContext, useEffect, useState } from "react";

import { Context } from "@/context/Context";

import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function DateTime() {
  const { showDate, setshowDate } = useContext(Context);
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
    <>
      <div className="flex justify-center w-full select-none text-base font-medium cursor-default">
        <p
          onClick={(e) => {
            e.stopPropagation();
            setshowDate(!showDate);
          }}
        >
          {formattedDateTime()}
        </p>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-7 left-[31%] transition-all duration-500 ${
          showDate
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="w-[670px] h-[310px] flex flex-col">
          <div className="triangle self-center" />
          <div className="flex text-black bg-white rounded p-1">
            <Calendar className="border-white" />
            <div className="grid place-content-center flex-1 text-gray-600 select-none">
              No event this day
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DateTime;
