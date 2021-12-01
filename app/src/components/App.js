import "./App.css";
import Router from "components/Router";
import { useState, useEffect } from "react";
import useLocalStorage from "hooks/useLocalStorage";

function App() {
  const { getLocalStorage } = useLocalStorage();
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const userData = getLocalStorage("userData");
    setUserObj(() => userData);

    window.addEventListener("storage", () => {
      const userData = getLocalStorage("userData");
      setUserObj(() => userData);
    });
  }, []);
  return (
    <>
      <Router userObj={userObj} setUserObj={setUserObj} />
    </>
  );
}

export default App;
