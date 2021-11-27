import "./index.css";
import { Link } from "react-router-dom";

function ClassCard({ classData }) {
  const nameSummery =
    classData.name.length > 16
      ? `${classData.name.slice(0, 16)}...`
      : classData.name;

  const oneLineInfoSummery =
    classData.oneLineInfo.length > 45
      ? `${classData.oneLineInfo.slice(0, 45)}...`
      : classData.oneLineInfo;

  const linkUrl = `/class/${classData.id}`;
  return (
    <li className="classCard">
      <Link to={linkUrl}>
        <div className="class__imgSpace" />
        <div className="class__info">
          <h3>{nameSummery}</h3>
          <p>{oneLineInfoSummery}</p>
        </div>
        <p className="class__club">{classData.club}</p>
      </Link>
    </li>
  );
}

export default ClassCard;
