import "./index.css";
import SignUpForm from "components/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUpPage({ userObj }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (userObj) {
      navigate("/");
    }
  }, [userObj, navigate]);

  return (
    <main className="authFormContainer">
      <div className="inner">
        <SignUpForm />
      </div>
    </main>
  );
}

export default SignUpPage;
