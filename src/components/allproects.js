import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AllProjects = () => {
  return (
    <>
      <section id="allimagesparent">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon7.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>No Need for</p>
                  <p>
                    <span className="redtext">Expensive Hardware</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon1.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>Download/ Storage</p>
                  <p>
                    <span className="redtext">Not Required</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon4.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>
                    <span className="redtext"> Supports Android/ Windows</span>
                  </p>
                  <p>Mobile, Tablets, TVs, PCs</p>
                  <p>
                    <span className="redtext iostext">iOS Coming Soon</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row projectcard4">
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon2.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>
                    <span className="redtext">High Quality</span>
                  </p>
                  <p>Low Latency, High FPS</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon3.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>Wide variety of</p>
                  <p>
                    <span className="redtext">AAA Game</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon8.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>Game Support for </p>
                  <p>
                    <span className="redtext">Web2 & Web3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row projectcard4">
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon11.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>Play to</p>
                  <p>
                    <span className="redtext">Earn</span>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon5.png"}
                    alt="projectcardicon"
                    className="interconnectedicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p><span className="redtext">Interconnected</span> </p>
                  <p>Multi-role Ecosystem</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon6.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p><span className="redtext">AI</span> Based Matching</p>
                  <p>for <span className="redtext">Gamers</span></p>
                </div>
              </div>
            </div> */}
            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon10.png"}
                    alt="projectcardicon"
                    className="interconnectedicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>Esports, Tournament &</p>
                  <p>
                    <span className="redtext">Fantasy Leagues</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="projectcard">
                <div className="projectcardimg">
                  <img
                    src={"./assets/images/icon9.png"}
                    alt="projectcardicon"
                  />
                </div>
                <div className="projectcardcontent">
                  <p>Own Digital Assets,</p>
                  <p>
                    <span className="redtext">Avatars, Tokens</span> &{" "}
                    <span className="redtext"> NFT’s</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
