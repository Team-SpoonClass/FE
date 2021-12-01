import "./index.css";
import { ClassInput, ClassTextarea } from "components/Input";
import { CustomSubmitBtn } from "components/CustomButton";
import useInput from "hooks/useInput";
import { useNavigate } from "react-router-dom";
import client from "lib/client";

function ClassForm({ purpose, classData }) {
  const navigate = useNavigate();
  let name = useInput("");
  let oneLineInfo = useInput("", (value) => value.length <= 50);
  let club = useInput("");
  let description = useInput("");
  let openKakao = useInput("");

  let buttonValue;

  switch (purpose) {
    case "new":
      buttonValue = "클래스 생성하기";
      break;
    case "update":
      buttonValue = "클래스 수정하기";
      break;
    default:
      break;
  }

  const createSubmit = async () => {
    try {
      console.log(client.defaults);
      const reqBody = {
        name: name.value,
        oneLineInfo: oneLineInfo.value,
        club: club.value,
        description: description.value,
        openKakao: openKakao.value,
      };
      await client.post("/lesson/create", reqBody).then((res) => {
        if (res.status === 200) {
          navigate(`/class/${res.data.id}`);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    switch (purpose) {
      case "new":
        createSubmit();
        break;
      case "update":
        buttonValue = "클래스 수정하기";
        break;
      default:
        break;
    }
  };

  return (
    <form className="classForm" onSubmit={onSubmit}>
      <div className="classInput-container">
        <label>클래스의 제목을 입력해주세요.</label>
        <ClassInput type="text" inputHook={name} />
      </div>
      <div className="classInput-container">
        <label>클래스를 간단하게 한줄로 소개해주세요.</label>
        <ClassInput type="text" inputHook={oneLineInfo} />
        <div className="wordCount">{oneLineInfo.value.length}/50</div>
      </div>
      <div className="classInput-container">
        <label>소속 동아리의 이름을 입력해주세요.</label>
        <ClassInput type="text" inputHook={club} />
      </div>
      <div className="classInput-container">
        <label>클래스의 구성과 일정을 소개해주세요.</label>
        <ClassTextarea inputHook={description} />
      </div>
      <div className="classInput-container">
        <label>오픈카톡 링크를 남겨주세요.</label>
        <ClassInput type="text" inputHook={openKakao} />
        <div className="extraInfo">
          클래스 참가자들이 참가문의를 요청할 경우, 오픈카톡링크로 연결됩니다.
        </div>
      </div>
      <CustomSubmitBtn value={buttonValue} />
    </form>
  );
}

export default ClassForm;
