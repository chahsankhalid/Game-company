import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { HashLink as Link } from "react-router-hash-link";
import emailjs from 'emailjs-com';
import axios from 'axios';
import $ from "jquery";

const  Navcomponent = () => {
  const [lgShow, setLgShow] = useState(false);
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const config = {
  //     SecureToken: "edb30f93-ab79-41df-85e0-06b84121b181",
  //     From: `${formState.email}`,
  //     To: "companythegame4@gmail.com",
  //     Subject: "Email from website",
  //     // Body : `${(formState.fname).concat(' ', formState.lname)} connected to you over email`,
  //     Body: {
  //       Name: `${formState.name}<br/>`,
  //       Organization: `${formState.organization}<br/>`,
  //       Email: `${formState.email}<br/>`,
  //       Subject: `${formState.subject}<br/>`,
  //       Phone: `${formState.phone}<br/>`,
  //       Message: `${formState.message}<br/>`,
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



  const sendEmail = (event) => {
    event.preventDefault();
    const data={
      Name: formState.fname,
      Organization: formState.organization,
      Email: formState.email,
      Subject: formState.subject,
      Phone: formState.phone,
      Message: formState.message,
    }

    emailjs.sendForm('service_36d2l6r','template_u8ggfys',event.target,'8fI-sqXJweUI1s17Y').then(
      response=>{
        console.log(response.status)
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

          axios.post('https://sheet.best/api/sheets/659586f7-fc9d-4be5-9c85-876d03ce86e4',data)
          .then((response)=>{
            console.log(response);
            setFormState('')
          })
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
      }
    )
  }
  const hidenav = () => {
    $("body").removeClass("active");
    document.body.style.overflow = "visible";
    $(".navbar-collapse").removeClass("show");
    $(".toggletwoicon,.iconone,.icontwo,.togglefouricon").removeClass("active");
    $('.navbar-toggler').removeClass('collapsed')
  };

  useEffect(() => {
    // $(".navbar-toggler").on("click", function () {
    //   $("body").toggleClass("active");
    //   $('.navbar-toggler').toggleClass('collapsed')
    //   $(".iconone").toggleClass("active");
    //   $(".icontwo").toggleClass("active");
    //   $(".toggletwoicon").toggleClass("active");
    //   $(".togglefouricon").toggleClass("active");
    // });
  }, []);
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand to="/">
            <img
              src={"./assets/images/logo.png"}
              className="logomain"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggler active"
          >
            <div class="toggletwoicon">
              <span class="navbar-toggler-icon iconone"></span>
              <span class="navbar-toggler-icon icontwo"></span>
            </div>
            <div class="togglefouricon">
              <span class="navbar-toggler-icon iconthree"></span>
              <span class="navbar-toggler-icon iconfour"></span>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="">
              <Navbar.Brand to="/" className="moblogbrand">
                <img
                  src={"./assets/images/logo.png"}
                  className="moblogo"
                  alt="logo"
                />
              </Navbar.Brand>
              <ul className="navul">
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#About"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#map"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <Button
                variant="outline-primary"
                onClick={() => setLgShow(true)}
                className="getin"
              >
                Speak to us
              </Button>
              <img
                src={"./assets/images/Mark.png"}
                className="mobnavlogo"
                alt="logo"
              />
            </Nav>
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

                  <button type="submit" className="submitbtnemail" >
                    <BsArrowRight />
                  </button>
                </form>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
};

export default Navcomponent;
