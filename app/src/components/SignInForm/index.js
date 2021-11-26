import "./index.css";
import { AuthInput } from "components/Input";
import useInput from "hooks/useInput";
import { CustomSubmitBtn } from "components/CustomButton";
import { Link } from "react-router-dom";

function SignInForm() {
  const email = useInput("");
  const password = useInput("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(email.value, password.value);
  };
  return (
    <form className="signInForm" onSubmit={onSubmit}>
      <h1>로그인하기</h1>
      <div className="authInput-container">
        <label>이메일 주소</label>
        <AuthInput
          type="text"
          inputHook={email}
          placeHolder="이메일 주소 입력"
        />
      </div>
      <div className="authInput-container">
        <label>비밀번호</label>
        <AuthInput
          type="password"
          inputHook={password}
          placeHolder="비밀번호 입력"
        />
      </div>
      <CustomSubmitBtn value="로그인" />
      <div className="induce-signUp">
        <span>아직 스푼클래스 계정이 없으신가요?</span>
        <Link to="/signUp">가입하기</Link>
      </div>
    </form>
  );
}
export default SignInForm;
