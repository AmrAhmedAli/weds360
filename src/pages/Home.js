import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Home() {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);

  const openHover = () => {
    setHovered(true);
  };
  const closeHover = () => {
    setHovered(false);
  };
  const openHover1 = () => {
    setHovered1(true);
  };
  const closeHover1 = () => {
    setHovered1(false);
  };
  const openHover2 = () => {
    setHovered2(true);
  };
  const closeHover2 = () => {
    setHovered2(false);
  };
  const openHover3 = () => {
    setHovered3(true);
  };
  const closeHover3 = () => {
    setHovered3(false);
  };
  const openHover4 = () => {
    setHovered4(true);
  };
  const closeHover4 = () => {
    setHovered4(false);
  };
  const openHover5 = () => {
    setHovered5(true);
  };
  const closeHover5 = () => {
    setHovered5(false);
  };
  const openHover6 = () => {
    setHovered6(true);
  };
  const closeHover6 = () => {
    setHovered6(false);
  };

  return (
    <div className="coverPage">
      <div className="header-container">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline={true}
          id="hompage-video"
        >
          <source src="https://weds360.com/assets/videoen-26dc5c1a6d2c4eea74342f9eb1e095449aead71235b3a9dd2c17ba0554212ee6.webm" />
          <source src="https://weds360.com/assets/videoen-93761ae7bfbf3eb2a2a88511924194ecae764c57795d5a1b5058a0678b7c02ba.mov" />
        </video>
        <div className="header header-white">
          <div className="header-links header-links-left">
            <ul>
              <li>
                <Link to="/" onMouseEnter={openHover} onMouseLeave={closeHover}>
                  360 Planner
                </Link>
                <div
                  className={
                    hovered
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover}
                  onMouseLeave={closeHover}
                >
                  <Link to="/">Check list</Link>
                  <Link to="/">Budgeter</Link>
                  <Link to="/">Registry list</Link>
                  <Link to="/">Guest list</Link>
                  <Link to="/">Wedding Website</Link>
                  <Link to="/">Couple Website</Link>
                  <Link to="/">More</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  onMouseEnter={openHover1}
                  onMouseLeave={closeHover1}
                >
                  Her
                </Link>
                <div
                  className={
                    hovered1
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover1}
                  onMouseLeave={closeHover1}
                >
                  <Link to="/">Designers</Link>
                  <Link to="/">Bridal Boutique</Link>
                  <Link to="/">Wedding Dresses</Link>
                  <Link to="/">Rings</Link>
                  <Link to="/">Makeup Artists</Link>
                  <Link to="/">More</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  onMouseEnter={openHover2}
                  onMouseLeave={closeHover2}
                >
                  Him
                </Link>
                <div
                  className={
                    hovered2
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover2}
                  onMouseLeave={closeHover2}
                >
                  <Link to="/">Suits</Link>
                  <Link to="/">Health</Link>
                  <Link to="/">Men's Grooming</Link>
                  <Link to="/">Fitness</Link>
                  <Link to="/">More</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  onMouseEnter={openHover3}
                  onMouseLeave={closeHover3}
                >
                  The Wedding
                </Link>
                <div
                  className={
                    hovered3
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover3}
                  onMouseLeave={closeHover3}
                >
                  <Link to="/">Venues</Link>
                  <Link to="/">Outdoor Wedding Venues</Link>
                  <Link to="/">VideoGraphers</Link>
                  <Link to="/">PhotoGraphers</Link>
                  <Link to="/">DJs</Link>
                  <Link to="/">More</Link>
                </div>
              </li>
            </ul>
            <div>
              <Switch>
                <Route exact path="/" component={this} />
              </Switch>
            </div>
          </div>
          <div className="header-logo">
            <Link to="/">
              <img
                className="img-responsive"
                src="https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="header-links header-links-right">
            <ul>
              <li>
                <Link
                  to="/"
                  onMouseEnter={openHover4}
                  onMouseLeave={closeHover4}
                >
                  Vendors
                </Link>
                <div
                  className={
                    hovered4
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover4}
                  onMouseLeave={closeHover4}
                >
                  <Link to="/">Create Your Profile</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/images"
                  onMouseEnter={openHover5}
                  onMouseLeave={closeHover5}
                >
                  Gallery
                </Link>
                <div
                  className={
                    hovered5
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover5}
                  onMouseLeave={closeHover5}
                >
                  <Link to="/">Wedding Ideas</Link>
                  <Link to="/categories">More</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  onMouseEnter={openHover6}
                  onMouseLeave={closeHover6}
                >
                  Ideas & More
                </Link>
                <div
                  className={
                    hovered6
                      ? "header-link-dropdown header-link-hover"
                      : "header-link-dropdown"
                  }
                  onMouseEnter={openHover6}
                  onMouseLeave={closeHover6}
                >
                  <Link to="/">Tips & Etiquette</Link>
                  <Link to="/">Wedding of the week</Link>
                  <Link to="/">More</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
