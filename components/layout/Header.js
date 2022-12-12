import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Header() {
  const router = useRouter();

  useEffect(()=>{
    const form = document.getElementById("searchForm");
    const formMobile = document.getElementById("searchFormMobile");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    formMobile.addEventListener('submit', handleForm);
    
    const element = document.getElementById(router.pathname);
    if(element !== null)element.classList.add('active');
  },[])

  const handleSearch = () => {
    const element = document.getElementById('search');
    router.push(`/news?search=${element.value}&page=1&layout=list`);
  }

  const handleMobileSearch = () => {
    const element = document.getElementById('searchmobile');
    router.push(`/news?search=${element.value}&page=1&layout=list`);
  }

  const handleClick = () => {
    router.push(`/about`);
  }

  return (
    <header className="container">
      <div className="d-flex flex-column justify-content-between w-100">
        <div className="d-flex flex-row mb-3 justify-content-between">
          <Link href="/">
            <div className="logo">
                <img className = "logo-image" src="/logo/logo.png" height="100rem" alt="Tengisbold logo"/>
                <div className = "logo-title mt-2">
                    <h2>ТЭНГИСБОЛД</h2>
                    <h7>Мэдээллийн технологийн мэдээ</h7>
                </div>
            </div>
          </Link>
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid d-none d-lg-block">
              <div className="d-flex flex-row justify-content-between">
                <form id="searchForm" className="d-flex w-75">
                  <input id="search" className="form-control me-2 w-100 rounded-pill" type="search" placeholder="Мэдээ хайх" aria-label="Search" />
                  <button className="btn btn-outline-primary" type="submit" onClick={()=>handleSearch()}>Хайх</button>
                </form>
                <button onClick={()=>{handleClick()}} type="button" className="btn btn-info p-1 help-button">?</button>
              </div>
            </div>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a id="/" className="nav-link" aria-current="page" href="/">Нүүр хуудас</a>
                  </li>
                  <li className="nav-item">
                    <a id="/about" className="nav-link" href="/about">Бидний тухай</a>
                  </li>
                  <li className="nav-item">
                    <a id="/news" className="nav-link" href="/news?page=1&layout=list">Мэдээ, мэдээлэл</a>
                  </li>
                  <li className="nav-item">
                    <a id="/photos&videos" className="nav-link" href="/photos&videos?page=1&content=photoandvideo">Фото & Видео сан</a>
                  </li>
                  <li className="nav-item">
                      <a id="/operation" className="nav-link" href="/operation">Үйл ажиллагаа</a>
                    </li>
                  <li className="nav-item">
                      <a id="/contact" className="nav-link" href="/contact">Холбоо барих маягт</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-fluid d-lg-none mb-3">
          <div className="d-flex flex-row justify-content-between">
            <form id="searchFormMobile" className="d-flex w-100" role="search">
              <input id="searchmobile" className="form-control me-2 w-100 rounded-pill" type="search" placeholder="Мэдээ хайх" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit" onClick={()=>handleMobileSearch()}>Хайх</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;