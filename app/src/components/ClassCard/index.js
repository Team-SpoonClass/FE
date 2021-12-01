import "./index.css";
import { Link } from "react-router-dom";

function ClassCard({ classData }) {
  const nameSummery =
    classData.name.length > 16
      ? `${classData.name.slice(0, 16)}...`
      : classData.name;

  const oneLineInfoSummery =
    classData.oneLineInfo.length > 45
      ? `${classData.oneLineInfo.slice(0, 41)}...`
      : classData.oneLineInfo;

  return (
    <li className="classCard">
      <Link
        to={{
          pathname: `/class/${classData.id}`,
        }}
      >
        {/* <div className="class__imgSpace" />*/}
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
