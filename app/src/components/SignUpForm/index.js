import "./index.css";
import { useState } from "react";
import AuthInput from "components/AuthInput";
import useInput from "hooks/useInput";
import AuthSubmitBtn from "components/AuthSubmitBtn";
import SchoolChoice from "components/SchoolChoice";
import { Link } from "react-router-dom";

function SignUpForm() {
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");
  const [school, setSchool] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password.value !== passwordConfirm.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log(
      userName.value,
      email.value,
      password.value,
      passwordConfirm.value
    );
  };
  return (
    <form className="signUpForm" onSubmit={onSubmit}>
      <h1>회원가입하기</h1>
      <div className="authInput-container">
        <label>이름</label>
        <AuthInput
          type="text"
          inputHook={userName}
          placeHolder="사용하실 이름을 입력해주세요."
        />
      </div>
      <div className="authInput-container">
        <label>이메일 주소</label>
        <AuthInput
          type="text"
          inputHook={email}
          placeHolder="이메일 주소를 입력해주세요"
        />
      </div>
      <div className="authInput-container">
        <label>비밀번호</label>
        <AuthInput
          type="password"
          inputHook={password}
          placeHolder="비밀번호를 입력해주세요."
        />
        <AuthInput
          type="password"
          inputHook={passwordConfirm}
          placeHolder="비밀번호를 확인합니다."
        />
      </div>
      <div className="authInput-container">
        <label>학교</label>
        <SchoolChoice school={school} setSchool={setSchool} />
      </div>
      <AuthSubmitBtn value="가입하기" />
      <div className="induce-signIn">
        <Link to="/signIn">기존 계정으로 로그인하기</Link>
      </div>
    </form>
  );
}
export default SignUpForm;
