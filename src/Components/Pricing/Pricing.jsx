import React from "react";
import "./Pricing.css";
import Image from "../../assets/Basic.png";

const Pricing = () => {
  return (
    <section className="princing container grid" id="pricing">
      <h2 className="section_title"> Pricing Plans</h2>

      <div className="pricing_container grid">
        <div className="pricing_item">
          <img src={Image} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">Une simple option</p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>XOF</em> 100k <span>Mois</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing_item best">
          <span className="badge">Recommander</span>
          <img src={Image} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">Une simple option</p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>XOF</em> 100k <span>Mois</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing_item">
          <img src={Image} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">Une simple option</p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>XOF</em> 100k <span>Mois</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
