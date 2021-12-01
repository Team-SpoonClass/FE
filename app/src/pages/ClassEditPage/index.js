import "./index.css";
import ClassForm from "components/ClassForm";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import client from "lib/client";

function ClassEditPage({ userObj }) {
  const { id } = useParams();
  const { getLocalStorage } = useLocalStorage();
  const navigate = useNavigate();
  const [classInfo, setClassInfo] = useState(null);

  const loadClassInfo = async () => {
    try {
      const authToken = await getLocalStorage("userData").oriToken;
      client.defaults.headers.common["x-auth-token"] = authToken;
      await client.get(`/lesson/one?id=${id}`).then((res) => {
        if (res.status === 200) {
          if (userObj.id !== res.data.userId) {
            navigate("/");
          }
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
    <main className="edit-class">
      <div className="inner">
        <div className="inner__first">
          <h1 className="page-title">클래스 수정하기</h1>
        </div>
        <div className="inner__second">
          {classInfo && <ClassForm purpose="update" classData={classInfo} />}
        </div>
      </div>
    </main>
  );
}

export default ClassEditPage;
