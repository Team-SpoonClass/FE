import "./App.css";
import Router from "components/Router";
import { useState, useEffect } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import client from "lib/client";

function App() {
  const { getLocalStorage } = useLocalStorage();
  const [userObj, setUserObj] = useState(null);

  const represhUserData = async () => {
    const userData = await getLocalStorage("userData");
    await setUserObj(() => userData);
    client.defaults.headers.common["x-auth-token"] = userObj
      ? userObj.oriToken
      : null;
  };
  useEffect(() => {
    represhUserData();

    window.addEventListener("storage", () => {
      represhUserData();
    });
  }, []);
  return (
    <>
      <Router userObj={userObj} setUserObj={setUserObj} />
    </>
  );
}

export default App;
