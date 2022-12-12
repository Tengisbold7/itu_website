import NewsSide from "../../components/news/newsSide";
import news from "../../news";
import NewsCard from "../../components/news/NewsCard";
import NewsList from "../../components/news/NewsList";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import EmptySearch from "../../components/search/EmptySearch";

function News() {
    const router = useRouter();
    const search = router.query.search;
    const page = parseInt(router.query.page);
    const layout = router.query.layout;

    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [searchNews, setSearchNews] = useState([]);
    const [empty, setEmpty] = useState([false]);

    useEffect(()=>{
        if(search === undefined) {
            setFirst(news.filter((news_i)=>{
                return (news.indexOf(news_i) >= 0 && news.indexOf(news_i) < 8);
            }));
            setSecond(news.filter((news_i)=>{
                return (news.indexOf(news_i) > 7 && news.indexOf(news_i) < 16);
            }));
            setThird(news.filter((news_i)=>{
                return (news.indexOf(news_i) > 15);
            }));
        }
        else {
            setSearchNews(news.filter((news_i)=>{
                return (news_i.title.toLowerCase().search(search.toLowerCase()) !== -1);
            }));
        }
    },[search])

    useEffect(()=>{
        if(searchNews.length === 0){
            setEmpty(true);
        }
        else setEmpty(false);
    },[searchNews]);

    useEffect(()=>{
        for(let i=1; i<=3; i++) {
            if(i === page) {
                const current = document.getElementById(`${i}`);
                current.classList.add('active');

                if(i == 3){
                    const next = document.getElementById(`next`);
                    next.classList.add('disabled');
                } else {
                    const next = document.getElementById(`next`);
                    next.classList.remove('disabled');
                }

                if(i == 1){
                    const back = document.getElementById(`back`);
                    back.classList.add('disabled');
                } else {
                    const back = document.getElementById(`back`);
                    back.classList.remove('disabled');
                }
            } else {
                const current = document.getElementById(`${i}`);
                current.classList.remove('active');
            }
        }
    },[page])

    const handlePagination = (event) => {
        if(event === 'next'){
            const current = document.getElementById(`${page}`);
            current.classList.remove("active");
            const next = document.getElementById(`${page+1}`);
            next.classList.add("active");
            router.push(`/news?page=${page+1}&layout=${layout}`);
        }
        else if(event === 'back'){
            router.push(`/news?page=${page-1}&layout=${layout}`);
        } else {
            router.push(`/news?page=${event}&layout=${layout}`);
        }
    }

    const handClick = (event) => {
        const inject = search !== undefined ? `&search=${search}&` : '';
        router.push(`/news?${inject}page=${page}&layout=${event}`);
    }

    return (
        <div className='d-flex flex-row container justify-content-between'>
            <div className="container vertical-scrollable col-3 d-none d-lg-block">
                <NewsSide props={news} />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-between container col-lg-9 col-12 mx-lg-3'>
                <div className="w-100">
                    <div className="title d-flex flex-row w-100">
                        <h1 className="col-lg-10 col-12" >Мэдээ, мэдээлэл</h1>
                        <div className="d-none d-lg-block btn-group col-3 h6" role="group" aria-label="Basic radio toggle button group">
                            <input onClick={()=>handClick('list')} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={true}/>
                            <label className="btn btn-outline-primary h6" htmlFor="btnradio1">List</label>
                            <input onClick={()=>handClick('grid')} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                            <label className="btn btn-outline-primary h6" htmlFor="btnradio2">Grid</label>
                        </div>
                    </div>
                    {search === undefined && <div>
                        {layout === 'list' && <div>
                            {page === 1 && <NewsList props={first} />}
                            {page === 2 && <NewsList props={second} />}
                            {page === 3 && <NewsList props={third} />}
                        </div>}
                        {layout === 'grid' && <div className="news-grid">
                            {page === 1 && first.map((card, index) => {
                                return(
                                    <NewsCard props={card} key={index} />  
                                );
                            })}
                            {page === 2 && second.map((card, index) => {
                                return(
                                    <NewsCard props={card} key={index} />  
                                );
                            })}
                            {page === 3 && third.map((card, index) => {
                                return(
                                    <NewsCard props={card} key={index} />  
                                );
                            })}
                        </div>}
                    </div>}
                    {search !== undefined && <div>
                        {empty && <EmptySearch />}
                        {layout === 'list' && <div>
                            {page === 1 && <NewsList props={searchNews} />}
                        </div>}
                        {layout === 'grid' && <div className="news-grid">
                            {page === 1 && searchNews.map((card, index) => {
                                return(
                                    <NewsCard props={card} key={index} />  
                                );
                            })}
                        </div>}
                    </div>}
                </div>
                <nav className="w-100 d-flex align-items-center align-self-end mb-5">
                    <ul className="pagination">
                        <li id="back" className="page-item disabled"><a className="page-link" onClick={()=>{handlePagination('back')}}>Өмнөх</a></li>
                        <li id="1" className="page-item active"><a className="page-link" onClick={()=>{handlePagination('1')}}>1</a></li>
                        <li id="2" className="page-item"><a className="page-link" onClick={()=>{handlePagination('2')}}>2</a></li>
                        <li id="3" className="page-item"><a className="page-link" onClick={()=>{handlePagination('3')}}>3</a></li>
                        <li id="next" className="page-item"><a className="page-link" onClick={()=>{handlePagination('next')}}>Дараах</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default News;