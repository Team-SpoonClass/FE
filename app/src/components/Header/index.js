import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  const isLoggedIn = true;
  const userName = "김수연";
  return (
    <header>
      <div className="inner">
        {isLoggedIn && (
          <ul className="main-menu">
            <li>
              <Link to="/class/new">클래스 만들기</Link>
            </li>
          </ul>
        )}
        {isLoggedIn ? (
          <Link to="/" className="logo">
            <img src="/img/spoonclass_logo.png" alt="SPOONCLASS" />
          </Link>
        ) : (
          <Link to="/landing" className="logo">
            <img src="/img/spoonclass_logo.png" alt="SPOONCLASS" />
          </Link>
        )}
        {isLoggedIn ? (
          <ul className="auth-menu">
            <li>
              <span className="user-name">{userName}</span>님
            </li>
            <li>
              <span className="logOut">로그아웃</span>
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
