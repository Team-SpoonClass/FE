import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "lib/client";

function ClassDetailPage({ userObj }) {
  const { id } = useParams();
  const [classInfo, setClassInfo] = useState({});
  const [userMatched, setUserMatched] = useState(false);
  const navigate = useNavigate();

  const loadClassInfo = async () => {
    try {
      await client.get(`/lesson/one?id=${id}`).then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setUserMatched(userObj.id === res.data.userId);
          setClassInfo(res.data);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (!userObj) {
      navigate("/landing");
    } else {
      loadClassInfo();
    }
  }, [userObj, navigate]);

  return (
    <main className="detail-class">
      <div className="inner">
        <div className="inner__first">
          <div className="class__headInfo">
            {/* 
            <div className="headInfo__imgSpace"></div>
            */}
            <div className="headInfo__InfoSpace">
              <div className="info">
                <h3 className="info__club">{classInfo.club}</h3>
                <h1 className="info__name">{classInfo.name}</h1>
                <p className="info__oneLineInfo">{classInfo.oneLineInfo}</p>
              </div>
              <div className="participateSpace">
                <p>참여하기 버튼을 누를 시, 오픈카톡 링크로 연결됩니다.</p>
                <a
                  className="participateBtn"
                  href={classInfo.openKakao}
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
            <p>{classInfo.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ClassDetailPage;
