import "./index.css";
import ClassForm from "components/ClassForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ClassCreatePage({ userObj }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userObj) {
      navigate("/landing");
    }
  }, [userObj, navigate]);

  return (
    <main className="create-class">
      <div className="inner">
        <div className="inner__first">
          <h1 className="page-title">새 클래스 만들기</h1>
        </div>
        <div className="inner__second">
          <ClassForm purpose="new" classData={null} />
        </div>
      </div>
    </main>
  );
}

export default ClassCreatePage;
