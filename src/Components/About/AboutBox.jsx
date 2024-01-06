import React from "react";

const AboutBox = () => {
    return (
        <div className="about_boxes grid">


            <div className="about_box">
                <i className="about_icon icon-fire">

                </i>

                <div>
                    <h3 className="about_title">05</h3>
                    <span className="about_subtitle">Projets Accomplis</span>
                </div>
            </div>



            <div className="about_box">
                <i className="about_icon icon-badge">

                </i>

                <div>
                    <h3 className="about_title">--</h3>
                    <span className="about_subtitle">Chargement</span>
                </div>
            </div>





            <div className="about_box">
                <i className="about_icon icon-people">

                </i>

                <div>
                    <h3 className="about_title">--</h3>
                    <span className="about_subtitle">Chargement</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;