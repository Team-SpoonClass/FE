import "./App.css";
import Router from "components/Router";
import { useState, useEffect } from "react";

function App() {
  const [userObj, setUserObj] = useState(null);

  const initUser = () => {
    setUserObj(null);
    localStorage.removeItem("oriToken");
  };

  useEffect(() => {
    initUser();
  }, []);

  return (
    <>
      <Router userObj={userObj} />
    </>
  );
}

export default App;
