import { useContext, useEffect, useState } from "react";

import { arrowCircle, keyhole, w1 } from "@/assets";
import { Context } from "@/context";
import { Settings } from "../TopBar/components";
import Modal from "./Modal";

function Login() {
  const { setIsLogged, username, password } = useContext(Context);

  const [dateTime, setDateTime] = useState(new Date());
  const [password2, setPassword2] = useState("");

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

    return (
      <>
        <p className="text-6xl">
          {hours}:{minutes}
        </p>
        <p className="text-xl">
          {dayOfWeek}, {month} {day}
        </p>
      </>
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (password2 == password) {
      setTimeout(function () {
        setIsLogged(true);
      }, 1500);
    } else {
      const container = window.document.getElementById("container");

      container.classList.add("buzz");

      setTimeout(function () {
        container.classList.remove("buzz");
      }, 1000);
    }
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
      {username.length != 0 ? (
        <div className="bg-gray-800 h-screen">
          <div className="px-3 py-2">
            <Settings />
          </div>

          <div className="text-white select-none text-center mt-3">
            {formattedDateTime()}
          </div>

          <div
            className="w-[350px] shadow-3xl rounded-md select-none relative mx-auto mt-20"
            id="container"
          >
            <div>
              <img
                src={w1}
                className="h-44 w-full rounded-t-md"
                draggable="false"
                alt=""
              />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
              <div className="w-20 h-20 rounded-full bg-orange-300 flex items-center justify-center">
                <span className="text-orange-700 font-medium text-2xl">
                  {username[0]}
                </span>
              </div>
            </div>

            <div className="bg-white pt-10 pb-7 rounded-b-md">
              <h1 className="text-center font-medium font-mono mt-1">
                {username}
              </h1>

              <form onSubmit={handleLogin}>
                <div className="flex items-center px-6 relative mt-5">
                  <img
                    src={keyhole}
                    className="absolute left-8 w-3"
                    alt="keyhole"
                  />

                  <input
                    type="password"
                    className="px-8 py-0.5 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-400 ring-1 focus:border-blue-500 w-full outline-none"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="password"
                    autoFocus
                  />

                  <img
                    src={arrowCircle}
                    className="absolute right-8 h-5"
                    onClick={handleLogin}
                    alt="arrowCircle"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Modal />
        </>
      )}
    </>
  );
}
export default Login;
