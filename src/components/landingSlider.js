import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Typewriter from "typewriter-effect/dist/core";
import emailjs from "emailjs-com";
import axios from 'axios';
import $ from "jquery";

const Landing = () => {
  const [lgShow, setLgShow] = useState(false);
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const config = {
  //     SecureToken: "48566797-eb1f-47cb-9ac3-3fa906d21b3b",
  //     From: formState.email,
  //     To: "companythegame1@gmail.com",
  //     Subject: "Email from website",
  //     // Body : `${(formState.fname).concat(' ', formState.lname)} connected to you over email`,
  //     Body: {
  //       Email: `${formState.email}<br/>`,
  //     },
  //   };
  //   if (window.Email) {
  //     window.Email.send(config).then((response) => {
  //       if (response !== "OK") {
  //         toast.error("Incorrect Email", {
  //           position: "top-right",
  //           autoClose: 4000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //       } else {
  //         toast.success("🦄Email sent successfully", {
  //           position: "top-right",
  //           autoClose: 2000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });

  //         // setTimeout(
  //         //     navigate('/')
  //         // , 3000);
  //       }
  //     });
  //   }
  // };

  const submitWaitlist = (event) => {
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
      .sendForm("service_q483fli","template_1buterp",event.target,"8fI-sqXJweUI1s17Y")
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
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["AI Driven", "AI Driven"],
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <>
      <section id="landingsection">
        <div className="overlay" onContextMenu={e => e.preventDefault()}>
          <video
            autoPlay
            loop
            playsInline
            muted
            className="back-video"
            id="backVideo"
          >
            <source src={"./assets/videos/Website.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="landingcontent">
          <h1 className="landingheading">
            <span className="grey">The Ultimate</span>{" "}
            <span className="red" id="typewriter">
              AI Driven
            </span>
          </h1>
          <h1 className="landingheading">
            <span className="white">Gaming</span>{" "}
            <span className="grey"> Experience</span>{" "}
            <span className="white">Awaits!</span>
          </h1>
          <Button
            variant="primary"
            className="joinbtn"
            onClick={() => setLgShow(true)}
          >
            Join the waitlist{" "}
            <span className="btn-icon">
              <MdOutlineKeyboardArrowRight />
            </span>
          </Button>
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
              <p className="landingemailpara">
                Please enter your email address and let us come back to you
              </p>
              <form onSubmit={submitWaitlist} className="emailform">
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
                <button type="submit" className="submitbtnemail">
                  <BsArrowRight />
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>

        <div className="landing-list">
          <ul>
            <li className="glitch" data-text="Play">
              Play
            </li>
            <li className="glitch" data-text="Compete">
              Compete
            </li>
            <li className="glitch" data-text="Earn">
              Earn
            </li>
          </ul>
          <ul>
            <li className="glitch" data-text="Anywhere">
              Anywhere
            </li>
            <li className="glitch" data-text="Anytime">
              Anytime
            </li>
            <li className="glitch" data-text="Any Device">
              Any Device
            </li>
          </ul>
        </div>

        <div className="revolvingcircle">
          <img
            src={"./assets/images/revolver.png"}
            // className="rotating"
            alt="revolve"
          />
          <MdOutlineKeyboardArrowDown className="revolveicon" />
        </div>
      </section>
    </>
  );
};
export default Landing;
