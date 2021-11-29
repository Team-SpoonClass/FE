import "./index.css";
import ClassForm from "components/ClassForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ClassEditPage({ userObj }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userObj) {
      navigate("/landing");
    }
  }, [userObj, navigate]);
  return (
    <main className="edit-class">
      <div className="inner">
        <div className="inner__first">
          <h1 className="page-title">클래스 수정하기</h1>
        </div>
        <div className="inner__second">
          <ClassForm purpose="update" />
        </div>
      </div>
    </main>
  );
}

export default ClassEditPage;
