import { useState } from "react";
import NewsCard from "./NewsCard";

function NewsList({props}) {
    return (
        <>
        {props !== [] && <div>
            <div className="list-left">
                <NewsCard props={props[0]} />
                <NewsCard props={props[1]} />
            </div>
            <div className="list-right">
                <NewsCard props={props[2]} />
                <NewsCard props={props[3]} />
            </div>
            <div className="list-left">
                <NewsCard props={props[4]} />
                <NewsCard props={props[5]} />
            </div>
            <div className="list-right">
                <NewsCard props={props[6]} />
                <NewsCard props={props[7]} />
            </div>
        </div>}
        </>
    );
}

export default NewsList;