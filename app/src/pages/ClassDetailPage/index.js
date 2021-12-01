import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "lib/client";
import useLocalStorage from "hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { ReactComponent as Edit } from "assets/icons/edit.svg";
import { ReactComponent as Cancel } from "assets/icons/cancel.svg";

function ClassDetailPage({ userObj }) {
  const { id } = useParams();
  const { getLocalStorage } = useLocalStorage();
  const [classInfo, setClassInfo] = useState({});
  const [userMatched, setUserMatched] = useState(false);
  const navigate = useNavigate();

  const loadClassInfo = async () => {
    try {
      const authToken = await getLocalStorage("userData").oriToken;
      client.defaults.headers.common["x-auth-token"] = authToken;
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

  const onDeleteClick = async () => {
    try {
      const authToken = await getLocalStorage("userData").oriToken;
      client.defaults.headers.common["x-auth-token"] = authToken;
      await client.delete(`/lesson/remove?id=${id}`).then((res) => {
        if (res.status === 200) {
          alert("삭제를 완료했습니다!");
          navigate("/");
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
              {userMatched && (
                <div className="class__manage">
                  <Link
                    className="manage__menu"
                    to={{
                      pathname: `/class/${classInfo.id}/edit`,
                    }}
                  >
                    클래스 수정하기
                    <Edit width="10" height="10" />
                  </Link>
                  <div className="manage__menu" onClick={onDeleteClick}>
                    클래스 삭제하기
                    <Cancel width="10" height="10" />
                  </div>
                </div>
              )}
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
