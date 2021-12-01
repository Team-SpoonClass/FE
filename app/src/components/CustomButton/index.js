import "./index.css";

export function CustomSubmitBtn({ value }) {
  return <input className="btn btn--active" type="submit" value={value} />;
}

export function ParticipateBtn({ type, classInfo, onBtnClick }) {
  switch (type) {
    case "opened":
      return (
        <a
          className="participateBtn opened"
          href={classInfo.openKakao}
          target="_blank"
          rel="noopener noreferrer"
        >
          클래스 참여하기
        </a>
      );
    case "closed":
      return <div className="participateBtn closed">클래스 참여불가</div>;
    case "adminOpened":
      return (
        <div className="participateBtn adminOpened" onClick={onBtnClick}>
          클래스 닫기
        </div>
      );
    case "adminClosed":
      return <div className="participateBtn closed">닫힌 클래스</div>;
    default:
      return <div>Loading</div>;
  }
}
