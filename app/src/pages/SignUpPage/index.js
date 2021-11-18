import "./index.css";
import SignUpForm from "components/SignUpForm";

function SignUpPage() {
  return (
    <main className="authFormContainer">
      <div className="inner">
        <SignUpForm />
      </div>
    </main>
  );
}

export default SignUpPage;
