import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "axios";
import emailjs from "emailjs-com";
import $ from "jquery";

export const Aboutmore = () => {
  const [lgShow, setLgShow] = useState(false);
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    const data = {
      Name: formState.fname,
      Organization: formState.organization,
      Email: formState.email,
      Subject: formState.subject,
      Phone: formState.phone,
      Message: formState.message,
    };

    emailjs
      .sendForm(
        "service_36d2l6r",
        "template_u8ggfys",
        event.target,
        "8fI-sqXJweUI1s17Y"
      )
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          $('.modal').removeClass('show');
          $('.modal-backdrop').removeClass('show')
          toast.success("Email sent successfully", {        
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          axios
            .post(
              "https://sheet.best/api/sheets/659586f7-fc9d-4be5-9c85-876d03ce86e4",
              data
            )
            .then((response) => {
              console.log(response);
              setFormState("");
            });
        } else {
          toast.error("Incorrect Email", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          // setTimeout(
          //     navigate('/')
          // , 3000);
        }
      });
  };
  useEffect(() => {}, []);
  return (
    <>
      <section id="map">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mapmain">
              <div className="divparent">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115529.45173411771!2d55.206699871506906!3d25.193259849847607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f6829419a6291%3A0x45715f67a79e1479!2sSaaha%20Offices%20B%2C%2057VG%2B6MX%20-%20al%20Saaha%20Offices%20-%20B%20Souk%20Al%20Bahar%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.193120999999998!2d55.276740999999994!5e0!3m2!1sen!2s!4v1676739367599!5m2!1sen!2s&z=100"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5255.291243281978!2d55.27365683957262!3d25.194336229132613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6829419a6291%3A0x45715f67a79e1479!2sSaaha%20Offices%20B!5e0!3m2!1sen!2s!4v1678362078035!5m2!1sen!2s"
                 allowFullScreen="" 
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="maplocation">
                  304, Al Saaha Offices, Block-B, Downtown, Dubai, UAE{" "}
                  <span className="locationtag"> Location</span>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <ul className="mapcontent">
                <li>The Game Co L.L.C © 2023</li>
                <li>304, Al Saaha Offices, Block-B, Downtown, Dubai, UAE</li>
                <li>info@thegamecompany.ai</li>
               
              </ul>
              <div className="mapbtn">
                <Button
                  variant="outline-primary"
                  onClick={() => setLgShow(true)}
                  className="getinmap"
                >
                  Speak to us
                </Button>
              </div>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={sendEmail} className="emailform">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputFname"
                        placeholder="Full name"
                        name="fname"
                        value={formState.fname || ""}
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputLorganization"
                        placeholder="Organization"
                        name="organization"
                        value={formState.organization || ""}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        name="email"
                        value={formState.email || ""}
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputLsubject"
                        placeholder="Subject"
                        name="subject"
                        value={formState.subject || ""}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        id="exampleInputPhone"
                        aria-describedby=""
                        placeholder="Phone Number"
                        name="phone"
                        value={formState.phone || ""}
                        onChange={changeHandler}
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Message"
                        name="message"
                        value={formState.message || ""}
                        onChange={changeHandler}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submitbtnemail">
                      <BsArrowRight />
                    </button>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
