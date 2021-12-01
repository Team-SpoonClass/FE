import "./index.css";
import SignInForm from "components/SignInForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignInPage({ userObj, setUserObj }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (userObj) {
      navigate("/");
    }
  }, [userObj, navigate]);

  return (
    <main className="authFormContainer">
      <div className="inner">
        <SignInForm setUserObj={setUserObj} />
      </div>
    </main>
  );
}

export default SignInPage;
