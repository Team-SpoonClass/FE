import "./index.css";
import { ClassInput, ClassTextarea } from "components/Input";
import { CustomSubmitBtn } from "components/CustomButton";
import useInput from "hooks/useInput";

function ClassForm({ purpose }) {
  const name = useInput("");
  const oneLineInfo = useInput("", (value) => value.length <= 50);
  const club = useInput("");
  const description = useInput("");
  const openKakao = useInput("");

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

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(name.value);
    console.log(oneLineInfo.value);
    console.log(club.value);
    console.log(description.value);
    console.log(openKakao.value);
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
