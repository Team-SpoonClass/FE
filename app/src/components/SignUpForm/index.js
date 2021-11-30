import "./index.css";
import { useState } from "react";
import { AuthInput } from "components/Input";
import useInput from "hooks/useInput";
import { CustomSubmitBtn } from "components/CustomButton";
import SchoolChoice from "components/SchoolChoice";
import { Link } from "react-router-dom";
import client from "lib/client";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");
  const [school, setSchool] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      !userName.value ||
      !email.value ||
      !password.value ||
      !passwordConfirm.value ||
      !school
    ) {
      alert("모든 입력창에 입력을 완료해주세요.");
      return;
    } else if (password.value !== passwordConfirm.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const requestBody = {
      email: email.value,
      password: password.value,
      name: userName.value,
      univ: school,
    };

    try {
      await client.post("/auth/signUp", requestBody).then((res) => {
        if (res.status === 200) {
          alert(`회원가입이 완료되었습니다! 로그인해주세요!`);
          navigate("/signIn");
        }
      });
    } catch (error) {
      alert(error.message);
    }
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
      <CustomSubmitBtn value="가입하기" />
      <div className="induce-signIn">
        <Link to="/signIn">기존 계정으로 로그인하기</Link>
      </div>
    </form>
  );
}
export default SignUpForm;
