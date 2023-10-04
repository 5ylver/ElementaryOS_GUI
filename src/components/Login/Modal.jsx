import { useContext } from "react";

import { Context } from "@/context";
import { xMark } from "@/assets";

/* eslint-disable react/prop-types */
function Modal() {
  const { setPassword, setUsername } = useContext(Context);

  const handleValidate = () => {
    const username = window.document.getElementById("username").value.trim();
    const password = window.document.getElementById("password").value.trim();

    if (username != "" && password != "") {
      setTimeout(() => {
        setUsername(username);
        setPassword(password);
      }, 1000);
    } else {
      const modal = window.document.getElementById("modal");
      modal.classList.add("buzz");
      setTimeout(() => {
        modal.classList.remove("buzz");
      }, 1000);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-black">
        <div className="justify-center items-center flex h-full outline-none focus:outline-none">
          <div className="relative w-auto mx-auto max-w-xl z-50">
            <div
              className="relative rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none"
              id="modal"
            >
              <div className="border-b-2 py-1 flex items-center justify-between px-3">
                <div className="text-lg font-medium pl-3">Account settings</div>
                <button
                  className="border-0 text-black text-3xl leading-none font-semibold focus:outline-none"
                  onClick={handleValidate}
                >
                  <img src={xMark} className="w-5" alt="" />
                </button>
              </div>
              {/*body*/}
              <div className="mt-3 p-3 w-96">
                <div className="space-y-6 px-5">
                  <div className="relative w-full">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400"
                      placeholder="Password"
                      autoFocus
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400"
                      type="password"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-400 focus:border-blue-500 outline-none active:scale-95"
                      onClick={handleValidate}
                    >
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative text-blue-400 transition duration-300 group-hover:text-white ease">
                        Confirm
                      </span>
                    </button>
                  </div>

                  <div className="text-center">
                    <h4 className="text-xl font-semibold">Tips</h4>
                    <ul>
                      <li>
                        <i>
                          * After setting up your account, press F11 for full
                          screen mode.
                        </i>
                      </li>
                      <li>
                        <i>
                          * The user account is deleted when you refresh the
                          page.
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
