import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/EFST (1).png';
import Image2 from '../../assets/pharma.png';
import Image3 from '../../assets/logoryp.png';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { themeContext } from "../../Context";
import { useContext } from "react";



const data = [
  {
    id : 1,
    image : Image1,
    title : "EFST",
    comment : '--'
  },
  {
    id : 2,
    image : Image2,
    title : "Pharma",
    comment : '--'
  },
  {
    id : 3,
    image : Image3,
    title : "Reivent Your Path",
    comment : '--'
  },

]

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="testimonials container section" id='testimonials'>
      <h2 className="section_title" style={{ color: darkMode ? "White" : "" }}>
      Feedback
      </h2>

      <Swiper className="testimonials_container grid"
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination= {{clickable : true}}
      >
         {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonials_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" className="prs_img" />
              </div>
              <h3 className="testimonials_title" style={{ color: darkMode ? "White" : "" }}>{title}</h3>
              <span className="subtitle" style={{ color: darkMode ? "black" : "" }}>{subtitle}</span>
              <div className="comment" style={{ color: darkMode ? "black" : "" }}>{comment}</div>
            </SwiperSlide>
          )
         }
         
         )}
      </Swiper>
    </section>
  )
}

export default Testimonials