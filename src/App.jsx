import { useContext } from "react";

import { Desktop, Dock, Login, TopBar } from "./components";
import { Context } from "./context";

function App() {
  const { isLogged, setShowApps, setShowPowerOpt } = useContext(Context);

  return (
    <>
      {isLogged ? (
        <div
          onClick={() => {
            setShowApps(false);
            setShowPowerOpt(false);
          }}
        >
          <TopBar />
          <Desktop />
          <Dock />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
