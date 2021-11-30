import "./index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import landing_banner_card1_path from "assets/img/landing_banner_card1.png";
import landing_banner_card2_path from "assets/img/landing_banner_card2.png";
import overViewTitle_path from "assets/img/overViewTitle.png";
import overView1_path from "assets/img/overView1.png";
import overView2_path from "assets/img/overView2.png";

function LandingPage({ userObj }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (userObj) {
      navigate("/");
    }
  }, [userObj, navigate]);
  return (
    <main className="landing-page">
      <section className="banner_wrapper">
        <div className="banner">
          <div className="introduce">
            <h1>
              학교 내 동아리에서 부담없이 클래스를 열고 <br />
              원하는 클래스에 가볍게 참여하고 싶다면?
            </h1>
            <p>스푼클래스에서 즐겨보세요!</p>
            <Link className="toSignUpBtn" to="/signUp">
              지금 가입하기
            </Link>
          </div>
          <img
            className="landing_banner_card1"
            src={landing_banner_card1_path}
            alt="landing_banner_card1"
          />
          <img
            className="landing_banner_card2"
            src={landing_banner_card2_path}
            alt="landing_banner_card2"
          />
        </div>
      </section>
      <section className="overview">
        <img
          className="overViewTitle"
          src={overViewTitle_path}
          alt="overView"
        />
        <img
          className="overView1"
          src={overView1_path}
          alt="스푼클래스가 추구하는 가치"
        />
        <div
          className="verticalLine"
          style={{ height: "112px", marginTop: "63px" }}
        />
        <img
          className="overView2"
          src={overView2_path}
          alt="스푼클래스의 기대효과"
        />
        <div
          className="verticalLine"
          style={{ height: "230px", marginTop: "83px" }}
        />
        <div className="introduce">
          <p>스푼클래스에서 즐겨보세요!</p>
          <Link className="toSignUpBtn" to="/signUp">
            지금 가입하기
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
