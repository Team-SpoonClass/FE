import "./index.css";
import ClassCard from "components/ClassCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const classList = [
  {
    id: 1,
    name: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삽사오육칠팔구십",
    oneLineInfo:
      "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삽사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삽사오육칠팔구십",
    club: "동아리 이름1",
  },
  {
    id: 2,
    name: "클래스 이름2",
    oneLineInfo: "한줄 소개 블라블라",
    club: "동아리 이름2",
  },
  {
    id: 3,
    name: "클래스 이름3",
    oneLineInfo: "한줄 소개 블라블라",
    club: "동아리 이름3",
  },
  {
    id: 4,
    name: "클래스 이름4",
    oneLineInfo: "한줄 소개 블라블라",
    club: "동아리 이름4",
  },
  {
    id: 5,
    name: "클래스 이름5",
    oneLineInfo: "한줄 소개 블라블라",
    club: "동아리 이름5",
  },
  {
    id: 6,
    name: "클래스 이름6",
    oneLineInfo: "한줄 소개 블라블라",
    club: "동아리 이름6",
  },
  {
    id: 7,
    name: "클래스 이름7",
    oneLineInfo: "한줄 소개 블라블라",
    club: "동아리 이름7",
  },
];

function MainPage({ userObj }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userObj) {
      navigate("/landing");
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
