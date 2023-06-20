import React from "react";
import Button from "react-bootstrap/Button";

const Services = () => {
  return (
    <>
      <section id="About">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <Button variant="outline-primary" className="aboutbtn">
                ABOUT US
              </Button>
              <h1 className="aboutheading pt-3">Revolutionary Experience</h1>
              <h1 className="aboutheading">Driven through our </h1>
              <h1 className="aboutheading">
                Cloud based <span className="purpletext">AI Platform</span>
              </h1>
              <p className="aboutcontent">
                Our cloud-based Web 3.0 platform is driven by AI and covers the
                global spectrum of devices, games, and gamers ensuring gaming is
                accessible, engaging and rewarding to everyone.
                <br />
                <br />
                We provide the ultimate gaming experience driven by users’
                psychographics and IOA (Interests, Opinions, and Activities)
                through our powerful fantasy league engine.
                <br />
                <br />
                The revolutionary user experience based on our indigenous
                technology is breaking down the barriers of connectivity,
                latency, and market economics!
              </p>
            </div>
            <div className="col-md-5" onContextMenu={(e) => e.preventDefault()}>
              <video
                autoPlay
                loop
                playsInline
                muted
                className="back-video"
                id="backVideo"
              >
                <source
                  src={"./assets/videos/Comp 7_Trimdynamic.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="Mission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {/* <Button variant="outline-primary" className="aboutbtn">
                OUR MISSION
              </Button> */}
              <h1 className="aboutheading pt-3 ourmission textfifty">Our</h1>
              <h1 className="aboutheading textfifty">Mission</h1>
              {/* <h1 className="aboutheading">
                by <span className="purpletext">AI Engine</span>
              </h1> */}
              <p className="aboutcontent">
                To offer the most advanced, flexible and inclusive AI driven
                cloud gaming platform that promises unmatched gaming experience,
                combining accessibility, affordability, innovation to anyone,
                anywhere, anytime and on any device
              </p>
            </div>
            <div className="col-md-6" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={"./assets/images/controller.png"}
                className="controller"
                alt="controller"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="Services">
        <div className="container-fluid">
          <div className="row cardsrow" id="cardsrow">
            <div className="col-md-3">
              <div className="service-cards">
                {/* <ul>
                  <li>01/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source
                  src={"./assets/videos/core-development.mp4"}
                  type="video/mp4"
                />
              </video> */}
                <div className="serviceimgparent">
                  <img
                    src={"./assets/images/003.png"}
                    className="rotating"
                    alt="revolve"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                <h1>Cloud Computing</h1>
                <p>
                  Offering an end to end experience, for the entire gaming
                  community from across the globe regardless of the end user
                  device, connectivity landscape and economic background.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-cards">
                {/* <ul>
                  <li>03/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source src={"./assets/videos/Comp 5.mp4"} type="video/mp4" />
              </video> */}
             <div className="serviceimgparent">
                <img
                  src={"./assets/images/Dabba1.png"}
                  className="rotating"
                  id="aiboximg"
                  alt="revolve"
                  onContextMenu={(e) => e.preventDefault()}
                />
</div>
                <h1 className="ai-heading">AI</h1>
                <p>
                  At the heart of our our gaming platform is our AI driven
                  gaming engine which makes intelligent decisions by using real
                  time data. Thus enhancing user gaming experience while
                  offering FairPlay and driving engagement on our platform for
                  game play and tournaments.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-cards">
                {/* <ul>
                  <li>02/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source src={"./assets/videos/adoption.mp4"} type="video/mp4" />
              </video> */}
                <div className="serviceimgparent">
                  <img
                    src={"./assets/images/002.png"}
                    className="rotating"
                    alt="revolve"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
                <h1>Web3</h1>
                <p>
                  Leveraging web3 technology to create a vast interconnected
                  multi-role ecosystem that allows a multitude of gamers to
                  participate, play and earn.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-cards">
                {/* <ul>
                  <li>03/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source src={"./assets/videos/Comp 5.mp4"} type="video/mp4" />
              </video> */}
              <div className="serviceimgparent">
                <img
                  src={"./assets/images/001.png"}
                  className="rotating"
                  alt="revolve"
                  onContextMenu={(e) => e.preventDefault()}
                />
</div>
                <h1>Metaverse</h1>
                <p>
                  Using blockchain technology to bring Metaverse gaming
                  experiences to life, enable gamification, digital twins and
                  management of digital assets (identities, personas, NFTs and
                  digital tokens){" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
