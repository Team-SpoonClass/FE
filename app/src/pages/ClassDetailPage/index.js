import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "lib/client";
import useLocalStorage from "hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { ReactComponent as Edit } from "assets/icons/edit.svg";
import { ReactComponent as Cancel } from "assets/icons/cancel.svg";
import { ParticipateBtn } from "components/CustomButton";

function ClassDetailPage({ userObj }) {
  const { id } = useParams();
  const { getLocalStorage } = useLocalStorage();
  const [classInfo, setClassInfo] = useState({});
  const [ready, setReady] = useState(false);
  const [participateDesc, setParticipateDesc] = useState("");
  const [participateType, setParticipateType] = useState("");
  const [userMatched, setUserMatched] = useState(false);
  const navigate = useNavigate();

  const loadClassInfo = async () => {
    try {
      const authToken = await getLocalStorage("userData").oriToken;
      client.defaults.headers.common["x-auth-token"] = authToken;
      await client.get(`/lesson/one?id=${id}`).then((res) => {
        if (res.status === 200) {
          setUserMatched(userObj.id === res.data.userId);
          setClassInfo(res.data);
          participateSetting(res.data);
          setReady(() => true);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const participateSetting = (classData) => {
    if (userObj.id === classData.userId) {
      //그 클래스를 연 유저일 경우
      switch (classData.status) {
        case "OPEN":
          setParticipateDesc(
            "모집인원마감 및 진행불가할 시, 클래스를 닫아 참여를 제한할 수 있습니다."
          );
          setParticipateType("adminOpened");
          break;
        case "CLOSE":
          setParticipateDesc("개설자에 의해 참여가 제한되어있는 상태입니다.");
          setParticipateType("adminClosed");
          break;
        default:
          break;
      }
    } else {
      //클래스를 연 유저가 아닐 경우
      switch (classData.status) {
        case "OPEN":
          setParticipateDesc(
            "참여하기 버튼을 누를 시, 오픈카톡 링크로 연결됩니다."
          );
          setParticipateType("opened");
          break;
        case "CLOSE":
          setParticipateDesc(
            "모집인원마감 및 클래스종료로 인해 클래스 참여가 불가능합니다."
          );
          setParticipateType("closed");
          break;
        default:
          break;
      }
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

  const onCloseClick = async () => {
    try {
      const authToken = await getLocalStorage("userData").oriToken;
      client.defaults.headers.common["x-auth-token"] = authToken;
      await client.post(`/lesson/close?id=${id}`).then((res) => {
        if (res.status === 200) {
          alert("클래스를 닫았습니다!");
          loadClassInfo();
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <main className="detail-class">
      <div className="inner">
        {ready ? (
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
                {classInfo && (
                  <div className="participateSpace">
                    <p>{participateDesc}</p>
                    <ParticipateBtn
                      type={participateType}
                      classInfo={classInfo}
                      onBtnClick={onCloseClick}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="class__bodyInfo">
              <h2>클래스의 구성과 일정</h2>
              <p>{classInfo.description}</p>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </main>
  );
}

export default ClassDetailPage;
