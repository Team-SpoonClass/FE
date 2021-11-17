import "./index.css";
import SignInForm from "components/SignInForm";

function SignInPage() {
  return (
    <main className="authFormContainer">
      <div className="inner">
        <SignInForm />
      </div>
    </main>
  );
}

export default SignInPage;
