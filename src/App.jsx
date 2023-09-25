import { useContext } from "react";

import { Desktop, Dock, Login, TopBar } from "./components";
import { Context } from "./context";

function App() {
  const { isLogged } = useContext(Context);

  return (
    <>
      {isLogged ? (
        <>
          <TopBar />
          <Desktop />
          <Dock />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
