import "./index.css";
import ClassForm from "components/ClassForm";

function ClassEditPage() {
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
