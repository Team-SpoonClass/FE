import "./index.css";
import ClassCard from "components/ClassCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "lib/client";

function MainPage({ userObj }) {
  const navigate = useNavigate();
  const [classList, setClassList] = useState([]);

  const loadClassList = async () => {
    client.defaults.headers.common["x-auth-token"] = userObj.oriToken;
    try {
      await client.get("/lesson").then((res) => {
        if (res.status === 200) {
          setClassList(() => res.data.lessonDetailDto);
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
      loadClassList();
    }
  }, [userObj, navigate]);
  return (
    <main className="home">
      <div className="inner">
        <div className="inner__first">
          <h1 className="page-title">클래스 목록 전체보기</h1>
        </div>
        <ul className="inner__second">
          {classList.map((classData) => (
            <ClassCard classData={classData} key={classData.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default MainPage;
