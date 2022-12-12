import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import news from '../news';
import NewsCard from '../components/news/NewsCard';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import NewsSide from '../components/news/newsSide';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {

  const [carouselNews, setCarouselNews] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);
  const [lastWeek, setLastWeek] = useState([]);

  useEffect(()=>{
    setCarouselNews(news.filter((news_i) => {
      return news.indexOf(news_i) < 2;
    }));

    setThisWeek(news.filter((news_i) => {
      return news.indexOf(news_i) < 5;
    }));

    setLastWeek(news.filter((news_i) => {
      return (news.indexOf(news_i) < 10 && news.indexOf(news_i) > 4);
    }));
  },[]);

  return (
    <div className='d-flex flex-row container justify-content-between'>
      <div className="container vertical-scrollable col-3 d-none d-lg-block">
        <NewsSide props={news} />
      </div>
      <div className='d-flex flex-column container col-lg-9 col-12 mx-lg-3'>
        <div id="carouselExampleIndicators" className="carousel slide w-100 multi-item-carousel w-75" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner align-middle">
            <Link href={`/news/${news[2].id}`}>
              <div className="carousel-item active">
                <img src={news[2].image} className="d-block w-100" alt="it news 2 image" />
                <p className="news-title">{news[2].title}</p>
                <div className="d-flex flex-row justify-content-between date">
                    <p>{news[2].author}</p>
                    <p>{news[2].date}</p>
                </div>
              </div>
            </Link>
            {carouselNews.map((news_i, index) => {
              return (
                <Link href={`/news/${news_i.id}`} key={index}>
                  <div className="carousel-item">
                    <img src={news_i.image} className="d-block w-100" alt={`it news ${news_i.id} image`} />
                    <p className="news-title">{news_i.title}</p>
                    <div className="d-flex flex-row justify-content-between date">
                        <p>{news_i.author}</p>
                        <p>{news_i.date}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="w-100">
          <div className='d-flex flex-row justify-content-between'>
            <h5 className="text-start">Энэ долоо хоног</h5>
            <a href="/news?page=1&layout=list" className="text-start text-secondary"><u>Бүх мэдээ харах</u></a>
          </div>
          <div className="d-flex flex-row d-none d-lg-block">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              navigation
              autoplay={{ delay: 1500 }}
              loop
            >
              {thisWeek.map((card, index) => {
                return(
                  <SwiperSlide key={index}>
                    <NewsCard props={card} key={index}/>  
                  </SwiperSlide>
              )})}
            </Swiper>
          </div>
          <div className="d-flex flex-row d-lg-none">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              navigation
              autoplay={{ delay: 1500 }}
              loop
            >
              {thisWeek.map((card, index) => {
                return(
                  <SwiperSlide key={index}>
                    <NewsCard props={card} key={index}/>  
                  </SwiperSlide>
              )})}
            </Swiper>
          </div>
        </div>
        <div className="w-100 mt-3">
          <div className='d-flex flex-row justify-content-between'>
            <h5 className="text-start">Өнгөрсөн долоо хоног</h5>
            <a href="/news?page=1&layout=list" className="text-start text-secondary"><u>Бүх мэдээ харах</u></a>
          </div>
          <div className="d-flex flex-row d-none d-lg-block">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              navigation
              autoplay={{ delay: 1500 }}
              loop
            >
              {lastWeek.map((card, index) => {
                return(
                  <SwiperSlide key={index}>
                    <NewsCard props={card} key={index}/>  
                  </SwiperSlide>
              )})}
            </Swiper>
          </div>
          <div className="d-flex flex-row d-lg-none">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              navigation
              autoplay={{ delay: 1500 }}
              loop
            >
              {lastWeek.map((card, index) => {
                return(
                  <SwiperSlide key={index}>
                    <NewsCard props={card} key={index}/>  
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
