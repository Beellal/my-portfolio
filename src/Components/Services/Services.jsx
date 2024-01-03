import React from 'react';
import './Services.css';
import Image1 from '../../assets/S1.jpg';
import Image2 from '../../assets/S2.jpg';
import Image3 from '../../assets/S3.jpg';

const data = [
  {
    id : 1,
    image :Image1,
    title: "Technicien BTP",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur quidem voluptatum commodi ullam adipisci beatae magni quia velit quasi dignissimos maxime quaerat eum doloribus nihil accusantium odio, aperiam itaqu",
  },
  {
    id : 2,
    image :Image2,
    title: "Management",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur quidem voluptatum commodi ullam adipisci beatae magni quia velit quasi dignissimos maxime quaerat eum doloribus nihil accusantium odio, aperiam itaqu",
  },
  {
    id : 3,
    image :Image3,
    title: "Development web",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur quidem voluptatum commodi ullam adipisci beatae magni quia velit quasi dignissimos maxime quaerat eum doloribus nihil accusantium odio, aperiam itaqu",
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