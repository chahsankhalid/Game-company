import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { motion as m} from 'framer-motion';

const Email = () => {
    const hidenav = () => {
        document.body.style.overflow = 'visible';
        const check = document.querySelector('.offcanvas');
        check.style.opacity = 0
        check.style.zIndex = -1
    }
    const navigate = useNavigate();
    const [formState, setFormState] = useState({})

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const config = {
            SecureToken: "365f23bb-b519-4870-9621-17e3a0f0f1e3",
            To: 'media.constantinepr@gmail.com',
            From: formState.email,
            Subject: "Email from website",
            // Body : `${(formState.fname).concat(' ', formState.lname)} connected to you over email`,
            Body: ({
                Name: `${formState.fname}<br/>`,
                // LastName: `${formState.lname}<br/>`,
                Email: `${formState.email}<br/>`,
                Phone: `${formState.phone}<br/>`,
                Message: `${formState.message}<br/>`,
                // Service: `${formState.select1}<br/>`,
                // Budget: `${formState.select2}<br/>`,
                Client: `${(formState.fname).concat(' ', formState.lname)} connected to you from website`
            })
        }
        if (window.Email) {
            window.Email.send(config).then((response) => {
                if (response !== 'OK') {
                    toast.error('Incorrect Email', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                else {
                    toast.success('🦄Email sent successfully', {
                        position: "top-right",
                        autoClose: 2000,
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
            })

        }
    }
    return (
        // <m.div initial={{ y: "100%"}}
        //  animate={{ y: "0%"}}
        //  exit={{opacity: 1}}
        //  transition={{duration: 0.75, ease: "easeOut"}}
        // >
        <m.div initial={{ scaleY: 0}}
         animate={{ scaleY: 1}}
         exit={{scaleY: 0}}
         transition={{duration: 0.5}}
        >
            <section id="emailsection">
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mb-3 navemail">
                        <Container fluid>
                            {/* <Navbar.Brand href="/"><img src={'./assets/images/©.png'} className="logomain" /></Navbar.Brand>
                            <Navbar.Brand href="/"><img src={'./assets/images/cpr_ico_white.png'} className="logomain1" /></Navbar.Brand> */}
                            <Navbar.Brand><Link to="/"><img src={'./assets/images/©.png'} className="logomain" /></Link></Navbar.Brand>
                            <Navbar.Brand><Link to="/"><img src={'./assets/images/cpr_ico_white.png'} className="logomain1" /></Link></Navbar.Brand>
                            <Link to="/contact" className="talkbtntocontact"><Button variant="outline-secondary" className="talkbtnemail">Lets Talk</Button>{' '}</Link>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                                <span className="navbar-toggler-icon1email"></span>
                                <span className="navbar-toggler-icon2email"></span>
                            </Navbar.Toggle>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="">
                                        <div className="container">
                                            <div className="col-sm-5 float-start mobnavsocialicon">
                                                <div className="c">C /</div>
                                                <div className='navsocial'>
                                                    <a href="https://www.facebook.com/constantineprandcommunications/" className="">Facebook</a>
                                                    <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">Instagram</a>
                                                    <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">Linkedin</a>
                                                </div>
                                            </div>
                                            <div className="col-sm-5 offset-sm-2 float-end">
                                                <ul>
                                                    <li>
                                                        <a onClick={hidenav}
                                                            className="nav-link"
                                                            smooth={true}
                                                            href="/"
                                                        ><span>Home</span>
                                                        </a>
                                                    </li>
                                                    <li onClick={hidenav}>
                                                        <Link data-cursor-stick
                                                            className="nav-link"
                                                            smooth={true}
                                                            to="#news"
                                                        ><span>Work</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={hidenav}
                                                            className="nav-link"
                                                            smooth={true}
                                                            to="#aboutus"
                                                        ><span>About</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={hidenav}
                                                            className="nav-link"
                                                            smooth={true}
                                                            to="#services"
                                                        ><span>Services</span>
                                                        </Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link onClick={hidenav}
                                                            className="nav-link"
                                                            smooth={true}
                                                            to="#news"
                                                        ><span>News</span>
                                                        </Link>
                                                    </li> */}
                                                    <li>
                                                        <Link onClick={hidenav}
                                                            className="nav-link"
                                                            smooth={true}
                                                            to="/contact"
                                                        ><span>Contact</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className='navsocialmob'>
                                                <a href="https://www.facebook.com/constantineprandcommunications/" className="">Facebook</a>
                                                <a href="https://instagram.com/constantinepr?igshid=YmMyMTA2M2Y=" className="">Instagram</a>
                                                <a href="https://www.linkedin.com/company/constantine-pr-communications/" className="">Linkedin</a>
                                            </div>
                                            </div>
                                        </div>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="worktogehter">
                                <h1 className='unorthotext1email'><span>Lets Work</span></h1>
                                <h1 className='unorthotext1email unorthotexttraformemail'><span>Together!</span> <img src={'./assets/images/turnicon.png'} /> </h1>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <form onSubmit={submitHandler} className="emailform">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputFname" placeholder="Name" name="fname" value={formState.fname || ''} onChange={changeHandler} required/>
                                </div>
                                {/* <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputLname" placeholder="Last Name" name="lname" value={formState.lname || ''} onChange={changeHandler} />
                            </div> */}
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" value={formState.email || ''} onChange={changeHandler} required/>
                                </div>
                                <div className="form-group">
                                    <input type="phone" className="form-control" id="exampleInputPhone" aria-describedby="" placeholder="Phone Number" name="phone" value={formState.phone || ''} onChange={changeHandler} />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" name="message" value={formState.message || ''} onChange={changeHandler} required></textarea>
                                </div>
                                {/* <div className="form-group">
                                <select className="form-control" id="exampleFormControlSelect1" name="select1" onChange={changeHandler}>
                                    <option value={''}>---I need help with---</option>
                                    <option value={'Digital Strategy'}>Digital Strategy</option>
                                    <option value={'Branding'}>Branding</option>
                                    <option value={'Web Development'}>Web Development</option>
                                    <option value={'Digital Marketing'}>Digital Marketing</option>
                                    <option value={'Media Production'}>Media Production</option>
                                </select>
                            </div>*/
                           
                            }
                                <button type="submit" className="submitbtnemail">Submit</button>
                            </form>
                        </div>
                    </div>

                    <ToastContainer />
                    <div className='row bottomfixed footeremail'>
                        <div className="col-md-7 vertical-center">
                            <div className='footernumber'>
                                © Dubai - 00971 5515 87909 | Pakistan - 0092 333 5790555
                            </div>
                            <div className='footernumbermob'>
                                © Dubai - 00971 5515 87909 |<br/> Pakistan - 0092 333 5790555
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='footernumber footercopywright'>
                                © ConstantinePr .2023
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </m.div>
    )
}
export default Email;