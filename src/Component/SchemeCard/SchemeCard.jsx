import { Container, Link } from "@mui/material";
import "./SchemeCard.scss";
import unavailable from "../../assets/image/unavailable.jpg";

const SchemeCard = (props) => {
  return (
    <div className="scheme-card">
      <div className="scheme-info">
        {<h2>{props.title}</h2>}
        <p className="description">{props.content}</p>
      </div>
      <div className="scheme-apply">
        <Link href={props.link} underline="none" color="black" target="_blank">
          <p className="scheme-btn">APPLY</p>
        </Link>
      </div>
    </div>
  );
};

export default SchemeCard;
