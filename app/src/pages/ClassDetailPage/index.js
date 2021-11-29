import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ClassDetailPage({ userObj }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userObj) {
      navigate("/landing");
    }
  }, [userObj, navigate]);

  return (
    <main className="detail-class">
      <div className="inner">
        <div className="inner__first">
          <div className="class__headInfo">
            <div className="headInfo__imgSpace"></div>
            <div className="headInfo__InfoSpace">
              <div className="info">
                <h3 className="info__club">동아리 이름</h3>
                <h1 className="info__name">클래스 이름</h1>
                <p className="info__oneLineInfo">
                  일이삼사오육칠팔구십일이삼사오육칠팔구십일이삽사오육칠팔구십일이삼사오육칠팔구십일이삽사오육칠팔구십
                </p>
              </div>
              <div className="participateSpace">
                <p>참여하기 버튼을 누를 시, 오픈카톡 링크로 연결됩니다.</p>
                <a
                  className="participateBtn"
                  href="https://open.kakao.com/o/swnnXrMd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  클래스 참여하기
                </a>
              </div>
            </div>
          </div>
          <div className="class__bodyInfo">
            <h2>클래스의 구성과 일정</h2>
            <p>어버버버버</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ClassDetailPage;
