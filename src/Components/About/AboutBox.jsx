import React from "react";

const AboutBox = () => {
    return (
        <div className="about_boxes grid">


            <div className="about_box">
                <i className="about_icon icon-fire">

                </i>

                <div>
                    <h3 className="about_title">02</h3>
                    <span className="about_subtitle">Projet Accompli</span>
                </div>
            </div>



            <div className="about_box">
                <i className="about_icon icon-badge">

                </i>

                <div>
                    <h3 className="about_title">00</h3>
                    <span className="about_subtitle">Cup of coffee</span>
                </div>
            </div>





            <div className="about_box">
                <i className="about_icon icon-people">

                </i>

                <div>
                    <h3 className="about_title">00</h3>
                    <span className="about_subtitle">Challenge</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;