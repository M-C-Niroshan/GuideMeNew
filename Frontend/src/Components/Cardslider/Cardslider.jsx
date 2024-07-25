import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './cardslider.css';

function Cardslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,

        slidesToScroll: 3

      };
  return (
    <div className='main-container'>
    <div className="w-3/4 m-auto">
        <div className="mt-20">
            <div className='cslider-heading-container'>
                <div className="blackline-left"></div>
                <div className='csliderh1-container'>
                <h1 className='csliderh1'> Places to travel</h1>
                </div>
                <div className="blackline-right"></div>
            </div>
        <Slider {...settings}>
            {data.map((d) =>(
                <div className='card-container'>
                    <div className='slider-content2'>
                        <p className='skidertext'>{d.place}</p>
                    </div>
                    <div className='img-container'>
                        <img src={d.img} alt='Destinatiopns' className='sliderimg'/>
                    </div>
                    <div className='slider-content'>
                        <p>{d.review}</p>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    </div>
    </div>
  )
}

const data = [
    {
        place:'KANDY',
        img:'/images/kandy.jpg',
        review:"Nestled in Sri Lanka's lush hill country, Kandy is a vibrant city known for its rich cultural heritage and stunning natural beauty. Home to the sacred Temple of the Tooth Relic and the tranquil Kandy Lake, it offers a unique blend of history and serenity."
    },
    {
        place:'POLONNARUWA',
        img:'/images/polonnaruwa.jpg',
        review:"Polonnaruwa, a UNESCO World Heritage site in Sri Lanka, is renowned for its well-preserved ancient ruins, including majestic temples and royal palaces, reflecting the island's rich history and cultural heritage."
    },
    {
        place:'ELLA',
        img:'/images/ella.jpg',
        review:"Ella is a charming town in Sri Lanka's hill country, known for its stunning views, lush tea plantations, and iconic landmarks like the Nine Arches Bridge and Ella Rock. It's a perfect destination for nature lovers and hikers."
    },
    {
        place:'GALLE',
        img:'/images/galle.jpg',
        review:"Nestled in Sri Lanka's lush hill country, Kandy is a vibrant city known for its rich cultural heritage and stunning natural beauty. Home to the sacred Temple of the Tooth Relic and the tranquil Kandy Lake, it offers a unique blend of history and serenity."
    },
    {
        place:'KKITHULGALA',
        img:'/images/kithulgala.jpg',
        review:"Kithulgala is a small town in Sri Lanka known for its lush rainforests, scenic landscapes, and thrilling adventure activities such as white-water rafting on the Kelani River."
    },

]

export default Cardslider