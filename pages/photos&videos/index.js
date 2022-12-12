import news from "../../news";
import NewsSide from "../../components/news/newsSide";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function PhotosAndVideos(){
    const router = useRouter();
    const page = parseInt(router.query.page);
    const content = router.query.content;
    const openPhoto = router.query.open;

    const [firstVideos, setFirstVideos] = useState([]);
    const [secondVideos, setSecondVideos] = useState([]);
    const [thirdVideos, setThirdVideos] = useState([]);

    const [firstPhotos, setFirstPhotos] = useState([]);
    const [secondPhotos, setSecondPhotos] = useState([]);
    const [thirdPhotos, setThirdPhotos] = useState([]);

    useEffect(()=>{
        setFirstVideos(videos.filter((video)=>{
            return (videos.indexOf(video) >= 0 && videos.indexOf(video) < 3);
        }));
        setSecondVideos(videos.filter((video)=>{
            return (videos.indexOf(video) >= 3 && videos.indexOf(video) < 6);
        }));
        setThirdVideos(videos.filter((video)=>{
            return (videos.indexOf(video) >= 6);
        }));

        setFirstPhotos(photos.filter((photo)=>{
            return (photos.indexOf(photo) >= 0 && photos.indexOf(photo) < 3);
        }));
        setSecondPhotos(photos.filter((photo)=>{
            return (photos.indexOf(photo) >= 3 && photos.indexOf(photo) < 6);
        }));
        setThirdPhotos(photos.filter((photo)=>{
            return (photos.indexOf(photo) >= 6);
        }));
    },[])

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
            router.push(`/photos&videos?page=${page+1}&content=${content}`);
        }
        else if(event === 'back'){
            router.push(`/photos&videos?page=${page-1}&content=${content}`);
        } else {
            router.push(`/photos&videos?page=${event}&content=${content}`);
        }
    }

    const handClick = (event) => {
        router.push(`/photos&videos?page=${page}&content=${event}`);
    }

    const open = (photo) => {
        router.push(`/photos&videos?page=${page}&content=${content}&open=${photo}`);
    }

    return (
        <div className='d-flex flex-row container justify-content-between'>
            <div className="container vertical-scrollable col-3 d-none d-lg-block">
                <NewsSide props={news} />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-between container col-lg-9 col-12 mx-lg-3'>
                <div>
                    <div className="title d-flex flex-row w-100">
                        <h1 className="col-lg-8 col-12">Фото & Видео сан</h1>
                        <div className="btn-group col-4 h6 d-none d-lg-block" role="group" aria-label="Basic radio toggle button group">
                            <input onClick={()=>handClick('photoandvideo')} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={true}/>
                            <label className="btn btn-outline-primary h6" htmlFor="btnradio1" >Фото & Видео</label>
                            <input onClick={()=>handClick('photo')} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                            <label className="btn btn-outline-primary h6" htmlFor="btnradio2">Фото</label>
                            <input onClick={()=>handClick('video')} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                            <label className="btn btn-outline-primary h6" htmlFor="btnradio3">Видео</label>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="w-100">
                            {page === 1 && content === 'photo' && firstPhotos.map((photo, index) => {
                                return (
                                    <img key={index} onClick={()=>{open(photo)}} src={photo} className="col-lg-12 mb-3 photo" alt={`photo${index}`} />
                                );
                            })}
                            {page === 2 && content === 'photo' && secondPhotos.map((photo, index) => {
                                return (
                                    <img key={index} onClick={()=>{open(photo)}} src={photo} className="col-lg-12 mb-3 photo" alt={`photo${index}`} />
                                );
                            })}
                            {page === 3 && content === 'photo' && thirdPhotos.map((photo, index) => {
                                return (
                                    <img key={index} onClick={()=>{open(photo)}} src={photo} className="col-lg-12 mb-3 photo" alt={`photo${index}`} />
                                );
                            })}
                        </div>
                        <div className="w-100">
                            {page === 1 && content === 'video' && firstVideos.map((video, index) => {
                                return (
                                    <video key={index} className="col-lg-12 mx-3 mb-3" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            })}
                            {page === 2 && content === 'video' && secondVideos.map((video, index) => {
                                return (
                                    <video key={index} className="col-lg-12 mx-3 mb-3" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            })}
                            {page === 3 && content === 'video' && thirdVideos.map((video, index) => {
                                return (
                                    <video key={index} className="col-lg-12 mx-3 mb-3" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center">
                        <div className="d-flex flex-column w-50">
                            {page === 1 && content === 'photoandvideo' && firstPhotos.map((photo, index) => {
                                return (
                                    <img key={index} onClick={()=>{open(photo)}} src={photo} className="col-lg-12 mb-3 photo" alt={`photo${index}`} />
                                );
                            })}
                            {page === 2 && content === 'photoandvideo' && secondPhotos.map((photo, index) => {
                                return (
                                    <img key={index} onClick={()=>{open(photo)}} src={photo} className="col-lg-12 mb-3 photo" alt={`photo${index}`} />
                                );
                            })}
                            {page === 3 && content === 'photoandvideo' && thirdPhotos.map((photo, index) => {
                                return (
                                    <img key={index} onClick={()=>{open(photo)}} src={photo} className="col-lg-12 mb-3 photo" alt={`photo${index}`} />
                                );
                            })}
                        </div>
                        <div className="d-flex flex-column w-50">
                            {page === 1 && content === 'photoandvideo' && firstVideos.map((video, index) => {
                                return (
                                    <video key={index} className="col-lg-12 mx-3 mb-3" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            })}
                            {page === 2 && content === 'photoandvideo' && secondVideos.map((video, index) => {
                                return (
                                    <video key={index} className="col-lg-12 mx-3 mb-3" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            })}
                            {page === 3 && content === 'photoandvideo' && thirdVideos.map((video, index) => {
                                return (
                                    <video key={index} className="col-lg-12 mx-3 mb-3" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            })}
                        </div>
                    </div>
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

export default PhotosAndVideos;

const videos = [
    "/photos&videos/videos/apple-inclusion-and-diversity-open.mp4",
    "/photos&videos/videos/cinematic-company-profile-business-video-introduction.mp4",
    "/photos&videos/videos/we-are-bolt-the-fastest-growing-tech-company-in-europe.mp4",
    "/photos&videos/videos/corporate-video-for-it-company.mp4",
    "/photos&videos/videos/nets-company-presentation-video.mp4",
    "/photos&videos/videos/three-sixty-property-group-corporate-video.mp4",
    "/photos&videos/videos/how-will-artificial-intelligence-and-internet-of-things-change-the-world.mp4",
    "/photos&videos/videos/digitalization-people-technology-and-services.mp4",
    "/photos&videos/videos/digital-technology-supercluster-who-we-are.mp4"
]

const photos = [
    "/news-image/0.jpg",
    "/news-image/1.jpg",
    "/news-image/2.jpg",
    "/news-image/3.jpg",
    "/news-image/4.png",
    "/news-image/5.jpg",
    "/news-image/6.jpg",
    "/news-image/7.jpg",
    "/news-image/8.jpg",
]