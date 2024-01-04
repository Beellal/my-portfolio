import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/S2.jpg';
import Image2 from '../../assets/S3.jpg';
import Image3 from '../../assets/About.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



const data = [
  {
    id : 1,
    image : Image1,
    title : "Mahamadou Hatchabi",
    comment : 'C\'est ainsi que fonctionne la connaissance, elle s\'accumule, comme un intérêt composé.'
  },
  {
    id : 2,
    image : Image2,
    title : "Abdoul Rachid",
    comment : 'C\'est ainsi que fonctionne la connaissance, elle s\'accumule, comme un intérêt composé.'
  },
  {
    id : 3,
    image : Image3,
    title : "Khalid",
    comment : 'C\'est ainsi que fonctionne la connaissance, elle s\'accumule, comme un intérêt composé.'
  },

]

const Testimonials = () => {
  return (
    <section className="testimonials container section" id='testimonials'>
      <h2 className="section_title">
        Reviews & Clients
      </h2>

      <Swiper className="testimonials_container grid"
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation
      pagination= {{clickable : true}}
      >
         {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonials_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" className="" />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
         }
         
         )}
      </Swiper>
    </section>
  )
}

export default Testimonials