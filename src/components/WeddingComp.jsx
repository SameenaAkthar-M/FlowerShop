import React,{useContext} from 'react'
import './weddingcomp.css'
import { weddingSell } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const WeddingComp = () => {
  const {addToCart}=useContext(CartContext);
  const navigate=useNavigate();
  return (
    <div className='weddingSale'>
             <div className="headings">
            <h2>Wedding</h2>
            <a onClick={()=>{
              navigate('/wedding')
            }}>View more</a>
            </div>
            <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  navigation
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>

              {weddingSell.map((item) => (
                <SwiperSlide key={item.id} className="card">
                  <img src={item.image} alt={item.name} className="card-image"/>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div className="butns">
                  <button className='b1' onClick={()=>addToCart(item)}>Add to cart</button>
                  <button className='b1' onClick={()=>{
                    addToCart(item);
                    navigate('/cart')
                  }}>Buy Now</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>  
            </div>
  )
}

export default WeddingComp