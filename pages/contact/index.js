function Contact() {

    const handClick = () => {
        const name = document.getElementById('exampleFormControlInput1');
        if(name.value !== ""){
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
        }
        else {
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');
        }

        const phone = document.getElementById('exampleFormControlInput2');
        if(phone.value !== ""){
            phone.classList.add('is-valid');
            phone.classList.remove('is-invalid');
        }
        else {
            phone.classList.add('is-invalid');
            phone.classList.remove('is-valid');
        }

        const email = document.getElementById('exampleFormControlInput3');
        if(email.value !== ""){
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }
        else {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        }

        const feedback = document.getElementById('exampleFormControlTextarea1');
        if(feedback.value !== ""){
            feedback.classList.add('is-valid');
            feedback.classList.remove('is-invalid');
        }
        else {
            feedback.classList.add('is-invalid');
            feedback.classList.remove('is-valid');
        }
    }

    return (
        <div className="w-100 d-flex justify-content-between container flex-row mb-5">
            <img src="/contact/contact.jpg" className="col-lg-3 d-none d-lg-block img-fluid" alt="contact"/>
            <div className="d-flex align-items-center flex-column col-12 col-lg-9">
                <div className="title">
                    <h1>Холбоо барих</h1>
                </div>
                <div className="col-12 col-lg-9">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Нэр</label>
                        <input type="Нэр" className="form-control" id="exampleFormControlInput1" placeholder="Нэр оруулна уу?" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Утас</label>
                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Утасны дугаар оруулна уу?" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Цахим шуудан</label>
                        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Цахим шуудан оруулна уу?" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Санал, хүсэлт</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div className="mb-3 d-flex align-items-start">
                        <input className="me-2 mt-1" type="checkbox" id="exampleFormControlInput4" />
                        <label htmlFor="exampleFormControlInput4" className="form-label">Цаашид мэдээ мэдээллийг цахим шуудангаар хүлээн авна.</label>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mb-3" onClick={()=>{handClick()}}>Илгээх</button>
                    </div>
                    <h5 className="w-100">Бидэнтэй холбогдсонд баярлалаа</h5>
                    <p className="w-100">
                        Зургийг <a href="https://www.freepik.com/" className="text-primary">https://www.freepik.com/</a> линкнээс татаж авсан.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;