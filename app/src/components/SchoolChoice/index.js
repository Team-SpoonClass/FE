import "./index.css";
import { useState } from "react";
import { ReactComponent as Arrow } from "assets/icons/arrow.svg";

const schoolList = ["숭실대학교", "서울대학교", "중앙대학교"];

function SchoolChoice({ school, setSchool }) {
  const [isActive, setIsActive] = useState(false);

  const onActiveToggle = () => {
    setIsActive((prev) => !prev);
  };

  const onItemClick = (index) => {
    setSchool(schoolList[index]);
  };
  return (
    <div className="schoolInput" onClick={onActiveToggle}>
      <div className="dropdownBody">
        {school ? (
          <div className="selectedItem">{school}</div>
        ) : (
          <div className="selectItem">재학중인 학교를 선택해주세요.</div>
        )}
      </div>
      <div className={isActive ? "activedDropdownMenu" : "dropdownMenu"}>
        <div className="selectItem">재학중인 학교를 선택해주세요.</div>
        {schoolList.map((item, index) => (
          <div
            className="dropdownItem"
            key={index}
            onClick={() => onItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={isActive ? "activedArrow" : "deactivedArrow"}>
        <Arrow />
      </div>
    </div>
  );
}

export default SchoolChoice;
