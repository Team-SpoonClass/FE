import "./index.css";
import { Link } from "react-router-dom";
import logoImgPath from "assets/img/spoonclass_logo.png";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "hooks/useLocalStorage";
import client from "lib/client";

function Header({ userObj, setUserObj }) {
  const navigate = useNavigate();
  const { removeLocalStorage } = useLocalStorage();
  const onLogOutClick = () => {
    removeLocalStorage("userData");
    setUserObj(null);
    client.defaults.headers.common["x-auth-token"] = null;
    navigate("/landing");
  };
  return (
    <header>
      <div className="inner">
        {userObj && (
          <ul className="main-menu">
            <li>
              <Link to="/class/new">클래스 만들기</Link>
            </li>
          </ul>
        )}
        {userObj ? (
          <Link to="/" className="logo">
            <img src={logoImgPath} alt="SPOONCLASS" />
          </Link>
        ) : (
          <Link to="/landing" className="logo">
            <img src={logoImgPath} alt="SPOONCLASS" />
          </Link>
        )}
        {userObj ? (
          <ul className="auth-menu">
            <li>
              <span className="user-name">{userObj.name}</span>님
            </li>
            <li>
              <span className="logOut" onClick={onLogOutClick}>
                로그아웃
              </span>
            </li>
          </ul>
        ) : (
          <ul className="auth-menu">
            <li>
              <Link to="/signIn">로그인</Link>
            </li>
            <li>
              <Link to="/signUp">회원가입</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
