function Operation() {
    return (
        <div className="w-100 d-flex justify-content-center container flex-column mb-5">
            <div className="title">
                <h1>Үйл ажиллагаа</h1>
            </div>
            <div className="d-flex mt-3 justify-content-between row">
                <video className="col-lg-12 h-25 d-lg-none" controls>
                    <source src="/operation/operation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="col-lg-6 mt-3 mt-lg-0">
                    <h5>Үүсэл хөгжил</h5>
                    <p>
                        Интернэт технологи хичээлийн хүрээнд үзсэн html, css, javascript хэлнүүдийн мэдлэг болон nextjs фрэймворк ашиглан энэхүү веб хуудсийг хийж байна.
                    </p>
                    <p>
                        Мэдээнүүдийг IKON.MN, NEWS.MN зэрэг веб сайтуутаас авсан. Өөрийн сонирхлийн тухай буюу мэдээллийн технологийн мэдээ мэдээллүүдийг өдөр тутам уншигчдадаа хүргэх веб сайтын дизайныг хийж локад ажилдаг статик веб сайж хийж байна.
                    </p>
                    <h5>Үүсэл хөгжил</h5>
                    <p>
                        Интернэт технологи хичээлийн хүрээнд үзсэн html, css, javascript хэлнүүдийн мэдлэг болон nextjs фрэймворк ашиглан энэхүү веб хуудсийг хийж байна.
                    </p>
                    <h5>Үүсэл хөгжил</h5>
                    <p>
                        Интернэт технологи хичээлийн хүрээнд үзсэн html, css, javascript хэлнүүдийн мэдлэг болон nextjs фрэймворк ашиглан энэхүү веб хуудсийг хийж байна.
                    </p>
                    <p>
                    Бичлэгийг <a className="text-primary" href="https://www.youtube.com/watch?v=QyhwSYhX09s">"and action creative agency"</a> youtube сувгаас татаж авсан. Өөрийн сонирхлийн тухай буюу мэдээллийн технологийн мэдээ мэдээллүүдийг өдөр тутам уншигчдадаа хүргэх веб сайтын дизайныг хийж локад ажилдаг статик веб сайж хийж байна.
                    </p>
                </div>
                <video className="col-lg-6 h-25 d-none d-lg-block" controls>
                    <source src="/operation/operation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Operation;