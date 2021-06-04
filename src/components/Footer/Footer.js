import React from "react";
import { Container } from "react-bootstrap";
import playStoreImg from "../../assets/images/Playstore.png";
import iStore from "../../assets/images/iStore.png";
import iPhone from "../../assets/images/iPhone.png";
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <div className="appInfoWrapper">
              <h5>Get Fintech app</h5>
              <p>Available on</p>
              <div className="appsWrapper d-flex">
                <img src={playStoreImg} alt="" />
                <img src={iStore} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-banner">
              <img src={iPhone} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
