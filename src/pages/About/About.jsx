import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/aboutImg.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content-grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              adipisci dicta consectetur soluta, tenetur est doloremque. Maxime
              dolorem pariatur optio iusto tempore quos necessitatibus hic
              accusantium asperiores quaerat, ipsam iste?
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              adipisci dicta consectetur soluta, tenetur est doloremque. Maxime
              dolorem pariatur optio iusto tempore quos necessitatibus hic
              accusantium asperiores quaerat, ipsam iste?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
