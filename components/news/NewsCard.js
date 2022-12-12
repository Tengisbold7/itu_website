import Link from "next/link";
import { useEffect } from "react";

function NewsCard({props}) {

  return (
    <>    
    {props !== undefined && <Link href={`/news/${props.id}`}>
      <div id="element" className="card mb-2">
        <img src={props.image} className="card-img" alt={`card${props.id}`} />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </Link>}
    </>
  );
}

export default NewsCard;