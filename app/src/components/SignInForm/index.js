import "./index.css";
import { AuthInput } from "components/Input";
import useInput from "hooks/useInput";
import { CustomSubmitBtn } from "components/CustomButton";
import { Link } from "react-router-dom";
import client from "lib/client";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "hooks/useLocalStorage";

function SignInForm({ setUserObj }) {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();
  const { setLocalStorage } = useLocalStorage();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!email.value || !password.value) {
      alert("모든 입력창에 입력을 완료해주세요.");
      return;
    }

    const requestBody = {
      email: email.value,
      password: password.value,
    };
    try {
      await client.post("/auth/signIn", requestBody).then((res) => {
        if (res.status === 200) {
          const userData = {
            id: 1,
            name: "함인규",
            oriToken: res.data.oriToken,
          };
          setLocalStorage("userData", userData);
          setUserObj(userData);
          navigate("/");
        }
      });
    } catch (error) {
      alert(error.message);
    }
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
