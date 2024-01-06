import React from 'react';
import './Services.css';
import Image1 from '../../assets/S1.png';
import Image2 from '../../assets/S2.png';
import Image3 from '../../assets/S3.png';

const data = [
  {
    id : 1,
    image :Image1,
    title: "Technicien BTP",
    description : "Pour tous les travail de construction et de gestion de projet de construction",
  },
  {
    id : 2,
    image :Image3,
    title: " Program & Community (Manager)",
    description : "Pour des start-ups et des entreprises opérant dans le domaine du BTP. ",
  },
  {
    id : 3,
    image :Image2,
    title: "Development web",
    description : "Je travaille principalement du côté Frontend, avec des compétences également dans le Backend.",
  }
]

const Services = () => {
  return (
     <section className="services container section" id='services'>
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} style={{width:'150px', height:'150px'}} alt="" className="services_img" />

              <h3 className="services_titles">{title}</h3>

              <p className="services_description">{description}</p>
            </div>
          )
        })}
      </div>
     </section>
  )
}

export default Services