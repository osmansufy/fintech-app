import React from "react";
import { Container } from "react-bootstrap";
import playStoreImg from "../../assets/images/Playstore.png";
import iStore from "../../assets/images/iStore.png";
import iPhone from "../../assets/images/iPhone.png";
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="row bg-white">
          <div className="col-md-6">
            <div className="appInfoWrapper pl-5 pt-5">
              <h5>Get Fintech app</h5>
              <p>Available on</p>
              <div className="appsWrapper d-flex">
                <div className="appImg d-flex mr-3">
                  <img src={playStoreImg} alt="" />
                </div>
                <div className="appImg d-flex">
                  <img src={iStore} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-banner pt-5">
              <div className="footerPhoneImg">
                <img src={iPhone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
