function About() {
    return (
        <div className="w-100 d-flex justify-content-center container flex-column mb-5">
            <div className="title">
                <h1>Бидний тухай</h1>
            </div>
            <div className="d-flex mt-3 row">
                <div className = "d-flex col-lg-6">
                    <img src="/about/it.jpeg" className="card-img-top w-100" alt="about us"/>
                </div>
                <div className="col-lg-6 mt-3 mt-lg-0">
                    <h5>Үүсэл хөгжил</h5>
                    <p>
                        Интернэт технологи хичээлийн хүрээнд үзсэн html, css, javascript хэлнүүдийн мэдлэг болон nextjs фрэймворк ашиглан энэхүү веб хуудсийг хийж байна.
                    </p>
                    <p>
                        Өөрийн сонирхлийн тухай буюу мэдээллийн технологийн мэдээ мэдээллүүдийг өдөр тутам уншигчдадаа хүргэх веб сайтын дизайныг хийж локад ажилдаг статик веб сайж хийж байна.
                    </p>
                    <h5>Үүсэл хөгжил</h5>
                    <p>
                        Зургийг <a className="text-primary" href="https://www.masterclass.com/articles/positions-in-a-company">https://www.masterclass.com/articles/positions-in-a-company</a> линкнээс таиаж авсан. Интернэт технологи хичээлийн хүрээнд үзсэн html, css, javascript хэлнүүдийн мэдлэг болон nextjs фрэймворк ашиглан энэхүү веб хуудсийг хийж байна.
                    </p>
                </div>
            </div>
            <div className="d-flex mt-3 row">
                <div className="col-lg-6">
                    <h5>Үүсэл хөгжил</h5>
                    <p>
                        Интернэт технологи хичээлийн хүрээнд үзсэн html, css, javascript хэлнүүдийн мэдлэг болон nextjs фрэймворк ашиглан энэхүү веб хуудсийг хийж байна.
                    </p>
                    <p>
                        Бичлэгийг <a className="text-primary" href="https://www.youtube.com/watch?v=wAmbDCJocJM">"and action creative agency"</a> youtube сувгаас татаж авсан. Өөрийн сонирхлийн тухай буюу мэдээллийн технологийн мэдээ мэдээллүүдийг өдөр тутам уншигчдадаа хүргэх веб сайтын дизайныг хийж локад ажилдаг статик веб сайж хийж байна.
                    </p>
                </div>
                <video className="col-lg-6 h-25" controls>
                    <source src="/about/it.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default About;