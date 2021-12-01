import "./App.css";
import Router from "components/Router";
import { useState, useEffect } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import client from "lib/client";

function App() {
  const { getLocalStorage } = useLocalStorage();
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const userData = getLocalStorage("userData");
    setUserObj(() => userData);
    client.defaults.headers.common["x-auth-token"] = userObj
      ? userObj.oriToken
      : null;

    window.addEventListener("storage", () => {
      const userData = getLocalStorage("userData");
      setUserObj(() => userData);
      client.defaults.headers.common["x-auth-token"] = userObj
        ? userObj.oriToken
        : null;
    });
  }, []);
  return (
    <>
      <Router userObj={userObj} setUserObj={setUserObj} />
    </>
  );
}

export default App;
