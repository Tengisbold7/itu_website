import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";

function NewsSide({props}) {
    const [sideNews, setSideNews] = useState([]);

    useEffect(() => {
      setSideNews(props.filter((news) => {
        return props.indexOf(news) < 4;
      }));
    },[]);

    return (
        <>
        <h5 className="text-start">Онцлох мэдээ</h5>
        {sideNews && <div className="row text-center">
          <div className="">
            {sideNews.map((card, index) => {
              return (
                <NewsCard props={card} key={index}/>
              )
            })}
          </div>
        </div>}
        </>
    );
}

export default NewsSide;