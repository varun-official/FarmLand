import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import NewsCard_sg from "../NewsCard/NewsCard_sg";
import CustomPagination from "../Pagination/CustomPagination";
import coconut_banner from "../../assets/image/coconut_banner.jpg";
import Button from "@mui/material/Button";
import "./News.scss";
import CarouselList from "../Carousel/Carousel";
import { useUserAuth } from "../../context/UserAuthContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import Header from '../Header/Header'
import Weather from "../Weather/Weather";
import { useNavigate } from "react-router";

const News_sg = () => {
  const navigate = useNavigate();

  const [newsContent, setnewsContent] = useState([]);
  const [value, setValue] = useState("News");
  const [article, setArticle] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const [page, setPage] = useState(1);
  const { user, getArticle, getNews } = useUserAuth();
  const ref = collection(db, "news");
  const ref1 = collection(db, "article");

  useEffect(() => {
    // eslint-disable-next-line
    fetchNews();
    fetchArticle();
  }, [page]);

  const fetchNews = async () => {
    // const data = await getNews();
    // setnewsContent(data.docs)
    const data = onSnapshot(ref, (doc) => {
      setnewsContent(doc.docs);
    });
  };

  const fetchArticle = async () => {
    // const data = await getArticle();
    // setArticle(data.docs)
    const data = onSnapshot(ref1, (doc) => {
      setArticle(doc.docs);
    });
  };

  const menuItems = ["News", "Article"];

  return (
    <div>
      <Nav />
      {/* <div className="newsbanner">
          <CarouselList/>
      </div> */}

      <div className="news-main">
        <Weather/>
        <div className="news-filter">
          <div className="newswrap">

          <div
            className={value == "News" ? "newsbtnactive" : "newsbtn"}
            onClick={() => setValue("News")}
          >
            <h5>
              News <hr />
            </h5>
          </div>
          <div
            className={value == "Article" ? "newsbtnactive" : "newsbtn"}
            onClick={() => setValue("Article")}
          >
            <h5>
              Article <hr />
            </h5>
          </div>
          </div>

          <div className="addcrop"  onClick={() => {navigate("/crowdsourcing");
              }}>
            <h5>Crowdsourcing</h5>
          </div>
        </div>
        {value === "News" &&
          newsContent &&
          newsContent.map((da) => {
            const c = da.data();
            return (
              <NewsCard_sg
                key={c.title}
                title={c.title}
                description={c.description}
                image_url={c.img_url}
                link={c.link}
                content={c.content}
              />
            );
          })}
        {value === "Article" &&
          article &&
          article.map((da) => {
            const c = da.data();
            return (
              <NewsCard_sg
                key={c.title}
                title={c.title}
                description={c.description}
                image_url={c.img_url}
                link={c.link}
                content={c.content}
              />
            );
          })}
      </div>
      {/* {value === "News" && newsContent.length > 0 ? (
        <CustomPagination setPage={setPage} />
      ) : (
        ""
      )} */}
    </div>
  );
};
export default News_sg;
