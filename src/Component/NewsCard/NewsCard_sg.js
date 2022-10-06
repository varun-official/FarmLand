import { Container, Link } from "@mui/material";
import "./NewsCard.scss";
import unavailable from "../../assets/image/unavailable.jpg";

const NewsCard_sg = (props) => {
  return (
    <div className="news-card">
      <div className="news-img">
        <img
          src={props.image_url ? `${props.image_url}` : unavailable}
          alt="tbd"
        />
      </div>
      <div className="news-info">
        <Link href={props.link} underline="none" color="black" target="_blank">
          {<h2>{props.title}</h2>}
        </Link>
        <p className="description">{props.content}</p>
      </div>
    </div>
  );
};

export default NewsCard_sg;
